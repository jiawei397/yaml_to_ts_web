import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>yaml to TypeScript interface</title>
      </Head>
      <div class="p-4 w-full">
        <Counter />
      </div>
    </>
  );
}
