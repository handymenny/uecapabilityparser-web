import { $, component$, useVisibleTask$, useSignal } from '@builder.io/qwik';
import axios from 'axios';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  const getVersion = $(async () => {
    const url = import.meta.env.PUBLIC_VERSION_ENDPOINT;
    try {
      const res = await axios.get(url);
      return res.data.version as string;
    } catch (err) {
      console.error(err);
      alert(err);
    }
    return undefined;
  });

  const getUrlFromVersion = (version: string) => {
    const url = import.meta.env.PUBLIC_REPO_URL;
    if (version.startsWith('nightly-')) {
      return url + 'releases/tag/' + version;
    }
    if (version.startsWith('commit@')) {
      return url + 'commit/' + version.split('@')[1];
    }
    if (version.match(/\d+.\d+.\d+/)) {
      return url + 'releases/tag/v' + version;
    }
    return url;
  };

  const getShortVersion = (version: string) => {
    if (version.startsWith('nightly-')) {
      return version.substring(8).replace(/-/g, '');
    }
    if (version.startsWith('commit@')) {
      return version.substring(7);
    }

    return version;
  };

  const version = useSignal<string | undefined>(undefined);

  useVisibleTask$(async () => {
    version.value = await getVersion();
  });

  return (
    <header class="flex justify-between bg-black px-5 py-2">
      <div>
        <Link
          class="text-xl text-white hover:underline active:underline"
          href="/"
          title="UE Capability Parser"
        >
          UE Capability Parser
        </Link>
        {version.value !== undefined && (
          <a
            class="ml-0.5 align-[super] text-sm text-gray-300 hover:underline active:underline"
            target="_blank"
            href={getUrlFromVersion(version.value)}
          >
            {getShortVersion(version.value)}
          </a>
        )}
      </div>
      <a
        class="text-xl text-white hover:underline active:underline"
        href="https://github.com/HandyMenny"
        target="_blank"
      >
        by handymenny
      </a>
    </header>
  );
});
