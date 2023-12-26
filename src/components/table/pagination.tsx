import {
  component$,
  type PropFunction,
  type Signal,
  useComputed$,
} from '@builder.io/qwik';
import { Pagination } from '@qwik-ui/headless';
import { ChevronRightIcon, ChevronLeftIcon } from 'qwik-feather-icons';
import SelectInput from '../inputs/select-input';

interface Props {
  totalPages: Signal<number>;
  selectedPage: Signal<number>;
  combosPerPage: Signal<number>;
  onCombosPerPageChange$: PropFunction<(combosPerPage: number) => void>;
  onPageChange$: PropFunction<(page: number) => void>;
}

export default component$(
  ({
    totalPages,
    selectedPage,
    combosPerPage,
    onPageChange$,
    onCombosPerPageChange$,
  }: Props) => {
    const options = [
      { label: '25', value: '25' },
      { label: '50', value: '50' },
      { label: '100', value: '100' },
      { label: 'Unlimited', value: '-1' },
    ];

    const hidePrev = useComputed$(() => selectedPage.value == 1);
    const hideNext = useComputed$(() => selectedPage.value == totalPages.value);

    return (
      <div class={'flex max-w-full flex-wrap justify-between'}>
        <div class={'my-2 mr-5'}>
          <span class="block text-center text-base sm:inline sm:text-left">
            Combos/Page
          </span>
          <SelectInput
            class="!inline-flex !flex-row-reverse py-1 align-middle sm:ml-4 sm:py-0"
            selectClass={'!border-black'}
            labelClass={'hidden'}
            label={'Combos/Page'}
            options={options}
            selectedValue={combosPerPage.value.toString()}
            // eslint-disable-next-line qwik/valid-lexical-scope
            onInput$={(page: string) => {
              onCombosPerPageChange$(parseInt(page));
              (document.activeElement as HTMLElement)?.blur();
            }}
          />
        </div>
        <div class={'my-2'}>
          <span class="block text-center text-base sm:inline sm:text-left">
            Pages
          </span>
          <Pagination
            selectedPage={selectedPage.value}
            totalPages={totalPages.value}
            siblingCount={1}
            // eslint-disable-next-line qwik/valid-lexical-scope
            onPageChange$={(page: number) => {
              onPageChange$(page);
              (document.activeElement as HTMLElement)?.blur();
            }}
            customArrowTexts={{ previous: '', next: '' }}
            class="p-1 sm:inline"
            defaultClass="align-middle mx-[-1px] box-content min-w-6 min-h-7 border-2 border-solid border-black bg-white p-1 text-black outline-none hover:font-bold focus:ring-2 focus:ring-inset focus:ring-gray-400 active:font-bold active:ring-0"
            selectedClass="!bg-black text-white hover:!font-normal"
            dividerClass="hidden"
            prevButtonClass="align-middle p-1 ml-[2.5px] min-w-6 min-h-7 box-content outline-none focus:ring-2 focus:ring-offset-[-0.15px] focus:ring-gray-400 active:ring-0"
            nextButtonClass="align-middle p-1 mr-[2.5px] min-w-6 min-h-7 box-content outline-none focus:ring-2 focus:ring-offset-[-0.15px] focus:ring-gray-400 active:ring-0"
          >
            <ChevronLeftIcon
              q:slot="prefix"
              class={
                hidePrev.value ? undefined : 'hover:stroke-2 active:stroke-2'
              }
              size={24}
              strokeWidth={1.3}
              color={hidePrev.value ? 'rgb(106, 112, 129)' : undefined}
            />
            <ChevronRightIcon
              q:slot="suffix"
              class={
                hideNext.value ? undefined : 'hover:stroke-2 active:stroke-2'
              }
              size={24}
              strokeWidth={1.3}
              color={hideNext.value ? 'rgb(106, 112, 129)' : undefined}
            />
          </Pagination>
        </div>
      </div>
    );
  },
);
