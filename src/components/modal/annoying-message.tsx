import { component$, type Signal } from '@builder.io/qwik';
import Alert from './alert';

interface Props {
  show: Signal<boolean>;
}

export default component$((props: Props) => {
  if (import.meta.env.PUBLIC_ANNOYING_ALERT_EXP_BASE == 0) {
    return <></>;
  }

  return (
    <Alert show={props.show} title="Are you enjoying using this tool?">
      <p>
        UE Capability Parser is open source and free of any charge.
        <br />
        You can contribute to the project by:
      </p>
      <ul class="list-disc pl-10">
        <li>Uploading logs with accurate descriptions</li>
        <li>
          Reporting issues on{' '}
          <a href="https://github.com/handymenny/uecapabilityparser">GitHub</a>
        </li>
        <li>Submitting Pull Requests for new features or bug fixes</li>
        <li>
          Supporting the project via{' '}
          <a
            class="underline"
            href="https://www.paypal.com/donate/?hosted_button_id=QAU3LE5KTYBPG"
          >
            PayPal
          </a>{' '}
          or{' '}
          <a class="underline" href="https://liberapay.com/handymenny">
            LiberaPay
          </a>
        </li>
      </ul>
      <p>
        <br />
        If this message annoys you, feel free to run your own instance! :)
      </p>
    </Alert>
  );
});
