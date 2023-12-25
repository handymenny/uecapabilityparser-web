import {
  type Component,
  component$,
  useVisibleTask$,
  useSignal,
  useOnWindow,
  $,
} from '@builder.io/qwik';
import { type IconProps } from 'qwik-feather-icons';
import { useNavigate } from '@builder.io/qwik-city';

interface Props {
  label?: string;
  multilineLabel?: string;
  url?: string;
  Icon?: Component<IconProps>;
  inverted?: boolean;
  hidden?: boolean;
}

export default component$((props: Props) => {
  const { label, multilineLabel, url, Icon, inverted } = props;
  const nav = useNavigate();
  const invertedClass = inverted
    ? ' border-2 border-solid border-black bg-white text-black'
    : ' bg-black text-white';
  const hiddenCssClass = props.hidden ? ' hidden' : '';

  const outputRef = useSignal<Element>();

  const truncateIfNeeded = $((reset: boolean) => {
    if (outputRef.value) {
      const el = outputRef.value;
      const span = el.firstChild as HTMLSpanElement;
      if (span == null) return;

      if (reset && span.textContent !== multilineLabel) {
        span.textContent = multilineLabel ?? null;
      }

      const clientHeight = el.clientHeight;
      if (el.scrollHeight == clientHeight || span.textContent == null) {
        return;
      }
      while (span.offsetHeight + 50 > clientHeight) {
        const origLen = span.textContent.length;
        const truncStr: string = span.textContent.replace(/[\W\s]*(\S)+$/, '');
        const lenDiff = origLen - truncStr.length;
        if (lenDiff == 0) break;
        if (lenDiff > 3) {
          span.textContent = truncStr + '…';
        } else {
          span.textContent = truncStr;
        }
      }
    }
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    truncateIfNeeded(false);
  });

  useOnWindow(
    'resize',
    $(() => {
      truncateIfNeeded(true);
    }),
  );

  return (
    <button
      class={
        'multiellipsis my-2 h-[150px] w-full overflow-hidden p-2 text-center text-lg focus:outline-none focus:ring focus:ring-gray-400' +
        invertedClass +
        hiddenCssClass
      }
      ref={outputRef}
      onClick$={() => nav(url)}
    >
      <span>{multilineLabel}</span>
      {multilineLabel && label && <br />}
      <span>{label}</span>
      {Icon !== undefined && <Icon class={'m-auto'} />}
    </button>
  );
});
