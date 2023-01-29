import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function TextArea(props: JSX.HTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      rows={20}
      cols={50}
      class="px-2 py-1 mx-5 border-solid border-2 border-indigo-600 rounded-md"
    />
  );
}
