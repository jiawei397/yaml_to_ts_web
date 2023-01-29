import { useState } from "preact/hooks";
import { createRef } from "preact";
import { Button } from "../components/Button.tsx";
import { TextArea } from "../components/TextArea.tsx";

export default function Counter() {
  const [yaml, setYaml] = useState("");
  const [ts, setTS] = useState("");
  const tsRef = createRef();
  const trans = async () => {
    const res = await fetch("/api/joke", {
      method: "POST",
      body: JSON.stringify({
        "yaml": yaml,
      }),
    });
    const data = await res.text();
    setTS(data);
  };
  const copy = () => {
    if (!tsRef.current) {
      alert("No current");
      return;
    }
    const range = document.createRange();
    range.selectNode(tsRef.current);
    const selection = window.getSelection()!;
    if (selection.rangeCount > 0) selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    alert("Copied!");
    selection.removeRange(range);
  };
  return (
    <div class="gap-2 w-full">
      <section class="flex justify-center">
        <TextArea
          placeholder="请输入 YAML 代码"
          onChange={(e) => setYaml(e.currentTarget.value)}
        >
        </TextArea>
        <TextArea
          readonly
          placeholder="TypeScript interface"
          ref={tsRef}
          value={ts}
        >
        </TextArea>
      </section>
      <section class="w-full flex items-center justify-center mt-10">
        <Button onClick={trans}>YAML转TS</Button>
        <Button onClick={copy}>复制TS</Button>
      </section>
    </div>
  );
}
