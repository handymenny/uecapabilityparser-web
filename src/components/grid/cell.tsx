import {
  type Component,
  component$,
  useVisibleTask$,
  useSignal,
  useOnWindow,
  $,
} from '@builder.io/qwik';
import { type IconProps } from 'qwik-feather-icons';
import { Link } from '@builder.io/qwik-city';

interface Props {
  label?: string;
  multilineLabel?: string;
  url?: string;
  Icon?: Component<IconProps>;
  inverted?: boolean;
}

export default component$((props: Props) => {
  const { label, multilineLabel, url, Icon, inverted } = props;
  const invertedClass = inverted
    ? ' border-2 border-solid border-black bg-white text-black'
    : ' bg-black text-white';
  const maxTextLen = 150;

  const outputRef = useSignal<Element>();

  const truncateIfNeeded = $((reset: boolean) => {
    if (outputRef.value) {
      const el = outputRef.value;
      const span = el.querySelector('span') as HTMLSpanElement;
      if (span == null) return;

      if (reset && span.textContent !== multilineLabel) {
        span.textContent = multilineLabel ?? null;
      }

      // If the span is empty, return
      if (span.textContent == null) return;

      // Handle text overflow
      const clientHeight = el.clientHeight;
      if (el.scrollHeight == clientHeight) return;

      // cap the text length to maxTextLen
      let textLen = Math.min(span.textContent.length, maxTextLen);
      while (span.offsetHeight + 50 > clientHeight && textLen > 3) {
        // Reduce the text length by 5% of the current length or 3, whichever is greater
        textLen -= Math.max(3, Math.floor(textLen / 20));
        const truncStr: string = span.textContent.slice(0, textLen);
        span.textContent = truncStr + '…';
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
    <Link
      class={
        'multiellipsis my-2 flex h-[150px] w-full overflow-hidden p-2 text-center text-lg focus:outline-none focus:ring focus:ring-gray-400' +
        invertedClass
      }
      ref={outputRef}
      href={url}
      prefetch={false}
    >
      <div class={'m-auto break-words'}>
        <span>{multilineLabel}</span>
        {multilineLabel && label && <br />}
        <span>{label}</span>
        {Icon !== undefined && <Icon class={'m-auto'} />}
      </div>
    </Link>
  );
});
