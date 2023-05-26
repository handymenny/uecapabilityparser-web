import { type Component, component$, useVisibleTask$ } from '@builder.io/qwik';
import { type IconProps } from 'qwik-feather-icons';
import { useNavigate } from '@builder.io/qwik-city';
import { isServer } from '@builder.io/qwik/build';

interface Props {
  label?: string;
  multilineLabel?: string;
  url?: string;
  Icon?: Component<IconProps>;
  inverted?: boolean;
}

export default component$((props: Props) => {
  const { label, multilineLabel, url, Icon, inverted } = props;
  const nav = useNavigate();
  const invertedClass = inverted
    ? ' border-2 border-solid border-black bg-white text-black'
    : ' bg-black text-white';

  useVisibleTask$(() => {
    if (isServer) {
      return;
    }
    const multi = document.querySelectorAll('.multiellipsis');
    multi.forEach((el) => {
      const span = el.querySelector('span');
      if (span === null) {
        return;
      }
      const height = el.clientHeight;
      while (span.offsetHeight + 50 > height) {
        span.textContent =
          span.textContent?.replace(/\W*\s(\S)*$/, '...') ?? null;
      }
    });
  });

  return (
    <button
      class={
        'multiellipsis my-2 h-[150px] w-full overflow-hidden p-2 text-center text-lg focus:outline-none focus:ring focus:ring-gray-400' +
        invertedClass
      }
      onClick$={() => nav(url)}
    >
      <span>{multilineLabel}</span>
      {multilineLabel && label && <br />}
      <span>{label}</span>
      {Icon !== undefined && <Icon class={'m-auto'} />}
    </button>
  );
});
