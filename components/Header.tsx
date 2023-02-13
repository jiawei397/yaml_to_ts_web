import DenoIcon from "icons/brand-deno.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Header() {
  const title = "YAML to TypeScript interface";
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header class="flex justify-center pt-5">
        <a class="inline-flex flex-row items-center gap-2" href="/">
          <DenoIcon alt="Deno logo" class="w-8 h-8" />
          <h2 class="font-bold text-3xl">{title}</h2>
        </a>
      </header>
    </>
  );
}
