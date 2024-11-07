import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import Button from '~/components/inputs/button';
import type { LogType, Capabilities } from '~/@types/uecapabilityparser';
import { isServer } from '@builder.io/qwik/build';
import FormInput from './form-input';
import MulticapabilityView from '../viewer/multicapability-view';
import CircleSpinner from '../spinner/circle-spinner';
import Title from '../header/title';
import { StatusHelper } from '~/helpers/status';
import { isPowerOfBase, submitMultiPart } from '~/helpers/submit';
import { AlertException } from '~/helpers/alert';
import AnnoyingMessage from '../modal/annoying-message';

export default component$(() => {
  const annoyingAlertBase = import.meta.env.PUBLIC_ANNOYING_ALERT_EXP_BASE ?? 0;
  const annoyingAlertTimer = import.meta.env.PUBLIC_ANNOYING_ALERT_TIMER ?? 0;
  const resultData = useSignal<Capabilities[] | undefined>(undefined);
  const resultGroupDescription = useSignal<string | undefined>(undefined);
  const submitting = useSignal(false);
  const count = useSignal(1);
  const supportedLogTypes = useSignal<LogType[]>([]);
  const showAnnoyingAlert = useSignal(false);

  const showAnnoyingAlertFun = $(() => {
    const counter = localStorage.getItem('parsedCapabilitiesCounter') ?? '0';
    let counterInt = parseInt(counter);
    if (isNaN(counterInt)) counterInt = 0;
    counterInt++;
    localStorage.setItem('parsedCapabilitiesCounter', counterInt.toString());

    setTimeout(() => {
      if (counterInt > 1 && isPowerOfBase(counterInt, annoyingAlertBase)) {
        showAnnoyingAlert.value = true;
      }
    }, annoyingAlertTimer);
  });

  const submitFun = $(async (_: any, currentTarget: HTMLFormElement) => {
    resultData.value = undefined;
    submitting.value = true;
    try {
      const isMultiPartSupported = await StatusHelper.isMultiPartSupported();

      if (!isMultiPartSupported) {
        throw 'This UE Capability Parser version is not supported';
      }

      const url = '/view/multi/?id=';
      const result = await submitMultiPart(currentTarget, count.value);
      const id = result.id;
      const capList = result.capabilitiesList ?? [];
      const groupDescription = result.description;

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

        if (annoyingAlertBase > 0) showAnnoyingAlertFun();
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
                supportedLogs={supportedLogTypes.value}
              />
            ))}

            <div class="flex flex-wrap gap-x-4">
              <Button
                type="button"
                label="Remove"
                hidden={count.value < 2}
                onClick$={async () => {
                  if (count.value > 1) {
                    count.value--;
                  }
                }}
              />
              <Button
                type="button"
                label="Add"
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

      {annoyingAlertBase > 0 && <AnnoyingMessage show={showAnnoyingAlert} />}
    </>
  );
});
