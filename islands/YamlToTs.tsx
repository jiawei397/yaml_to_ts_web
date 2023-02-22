import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { TextArea } from "../components/TextArea.tsx";
import ArrowIcon from "icons/arrow-big-right.tsx";

export default function YamlToTs() {
  const [yaml, setYaml] = useState("");
  const [ts, setTS] = useState("");
  const trans = async () => {
    const res = await fetch("/api/trans", {
      method: "POST",
      body: JSON.stringify({
        "yaml": yaml,
      }),
    });
    const data = await res.text();
    setTS(data);
  };
  const copy = async () => {
    if (!ts) {
      alert("No TypeScript");
      return;
    }
    await navigator.clipboard.writeText(ts);
    alert("Copied!");
  };
  return (
    <div class="gap-2 w-full">
      <section class="flex justify-center">
        <TextArea
          placeholder="Input YAML code"
          onChange={(e) => setYaml(e.currentTarget.value)}
        >
        </TextArea>
        <div class="flex items-center">
          <ArrowIcon
            alt="Deno logo"
            class="w-8 h-8 cursor-pointer"
            onClick={trans}
          />
        </div>
        <TextArea
          readonly
          placeholder="TypeScript Interface"
          value={ts}
        >
        </TextArea>
      </section>
      <section class="w-full flex items-center justify-center mt-10">
        <Button onClick={trans}>YAML to TypeScript</Button>
        <Button onClick={copy}>Copy TypeScript</Button>
      </section>
    </div>
  );
}
