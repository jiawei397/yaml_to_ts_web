import { Head } from "$fresh/runtime.ts";
import YamlToTs from "../islands/YamlToTs.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yaml to TypeScript interface</title>
      </Head>
      <div class="p-4 w-full">
        <YamlToTs />
      </div>
    </>
  );
}
