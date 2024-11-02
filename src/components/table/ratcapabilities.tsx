import { component$ } from '@builder.io/qwik';
import RatcapabilityTable from './ratcapability-table';
import type { Capabilities } from '~/@types/uecapabilityparser';

interface Props {
  cap?: Capabilities;
  title?: string;
}

export default component$(({ cap, title }: Props) => {
  const ratCapabilities = cap?.ratCapabilities ?? [];

  const empty =
    cap === undefined ||
    (cap.lteCategoryDl === undefined && ratCapabilities.length === 0);
  if (empty) {
    return <></>;
  }

  if (ratCapabilities.length === 0) {
    // fallback for old "rat capabilities"
    const dummy: any = { type: 'RatCapabilitiesLte', rat: 'EUTRA' };
    ratCapabilities.push(dummy);
  }

  return (
    <details open={false}>
      <summary class="mt-10 text-xl font-bold">{title}</summary>

      {ratCapabilities.map((ratCapability, index) => (
        <RatcapabilityTable
          key={index}
          ratCapability={ratCapability}
          fullCap={cap}
        />
      ))}
    </details>
  );
});
