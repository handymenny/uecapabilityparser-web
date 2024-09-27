import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
interface Props {
  label?: string;
  hidden?: boolean;
  href?: string;
}

export default component$((props: Props) => {
  const { label, hidden, href } = props;
  return (
    <div class={'flex flex-grow basis-0 flex-col ' + (hidden ? 'hidden' : '')}>
      <Link
        title={label}
        href={href}
        class="my-2 w-full flex-grow border-2 border-solid border-black bg-white p-2 text-center text-lg text-black focus:outline-none focus:ring focus:ring-gray-400"
      >
        {label}
      </Link>
    </div>
  );
});
