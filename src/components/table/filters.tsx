import { component$ } from '@builder.io/qwik';
import type { IUeCapabilityFilter } from '~/@types/uecapabilityparser';
import FilterTable from './filter-table';

interface Props {
  filters?: IUeCapabilityFilter[];
  title?: string;
}

export default component$(({ filters, title }: Props) => {
  if (filters === undefined) {
    return <></>;
  }

  return (
    <details open={false}>
      <summary class="mt-10 text-xl font-bold">{title}</summary>

      {filters.map((filter, index) => (
        <FilterTable key={index} filter={filter} />
      ))}
    </details>
  );
});
