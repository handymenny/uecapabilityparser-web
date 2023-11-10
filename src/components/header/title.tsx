import { component$ } from '@builder.io/qwik';

interface Props {
  text: string;
  addClasses?: string;
}

export default component$(({ text, addClasses }: Props) => {
  const addClass = addClasses ?? '';
  return (
    <h1 class={'mb-2 text-center text-4xl font-semibold ' + addClass}>
      {text}
    </h1>
  );
});
