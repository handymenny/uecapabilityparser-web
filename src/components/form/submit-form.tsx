import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import Button from '~/components/inputs/button';
import type { LogType, Capabilities } from '~/@types/uecapabilityparser';
import { isServer } from '@builder.io/qwik/build';
import FormInput from './form-input';
import MulticapabilityView from '../viewer/multicapability-view';
import CircleSpinner from '../spinner/circle-spinner';
import Title from '../header/title';
import { StatusHelper } from '~/helpers/status';
import {
  submitLegacy,
  submitMultiLegacy,
  submitMultiPart,
} from '~/helpers/submit';
import { AlertException } from '~/helpers/alert';

export default component$(() => {
  const resultData = useSignal<Capabilities[] | undefined>(undefined);
  const resultGroupDescription = useSignal<string | undefined>(undefined);
  const submitting = useSignal(false);
  const count = useSignal(1);
  const multiParseSupported = useSignal(false);
  const supportedLogTypes = useSignal<LogType[]>([]);

  const submitFun = $(async (_: any, currentTarget: HTMLFormElement) => {
    resultData.value = undefined;
    submitting.value = true;
    try {
      let capList: Capabilities[];
      let url: string;
      let id: string | undefined;
      let groupDescription: string | undefined = undefined;

      if (multiParseSupported.value) {
        url = '/view/multi/?id=';
        let result;
        if (await StatusHelper.isMultiPartSupported()) {
          result = await submitMultiPart(currentTarget, count.value);
        } else {
          result = await submitMultiLegacy(currentTarget, count.value);
        }
        id = result.id;
        capList = result.capabilitiesList ?? [];
        groupDescription = result.description;
      } else {
        url = '/view/?id=';
        const result = await submitLegacy(currentTarget);
        id = result.id;
        capList = [result];
      }
      if (!isServer && id != null) {
        history.pushState({}, '', url + id);
        window.addEventListener(
          'popstate',
          () => {
            resultData.value = undefined;
            resultGroupDescription.value = undefined;
            submitting.value = false;
          },
          { once: true },
        );
      }

      submitting.value = false;
      resultData.value = capList;
      resultGroupDescription.value = groupDescription;
    } catch (error: any) {
      submitting.value = false;
      throw new AlertException(error);
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    async () => {
      multiParseSupported.value = await StatusHelper.isMultiSupported();
      supportedLogTypes.value = await StatusHelper.getSupportedLogs();
    },
    { strategy: 'document-ready' },
  );

  return (
    <>
      <div
        class={
          submitting.value || resultData.value !== undefined ? 'hidden' : ''
        }
      >
        <Title text="Parser" addClasses="mb-4" />
        <div class="my-[-1rem] flex flex-1 flex-col">
          <form
            class={'m-auto w-full max-w-2xl'}
            autocomplete="off"
            preventdefault:submit
            onSubmit$={submitFun}
          >
            {[...Array(count.value).keys()].map((value) => (
              <FormInput
                key={value}
                prefix={`${value}-`}
                submitting={submitting}
                multiparse={multiParseSupported.value}
                supportedLogs={supportedLogTypes.value}
              />
            ))}

            <div class="flex flex-wrap gap-x-4">
              <Button
                type="button"
                label="Remove"
                hidden={!multiParseSupported.value || count.value < 2}
                onClick$={async () => {
                  if (count.value > 1) {
                    count.value--;
                  }
                }}
              />
              <Button
                type="button"
                label="Add"
                hidden={!multiParseSupported.value}
                onClick$={async () => {
                  count.value++;
                }}
              />
              <div class={(count.value > 1 && 'min-w-full') || 'flex-1'}>
                <Button type="submit" label="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
      {resultData.value == undefined && submitting.value && (
        <div class="flex flex-1 flex-col">
          <CircleSpinner centered={true} />
        </div>
      )}
      {resultData.value !== undefined && !submitting.value && (
        <>
          <Title text="View" />
          <MulticapabilityView
            capabilitiesList={resultData.value}
            groupDescription={resultGroupDescription.value}
          />
        </>
      )}
    </>
  );
});
