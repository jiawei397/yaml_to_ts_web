import LemonIcon from "icons/lemon-2.tsx";
import GithubIcon from "icons/brand-github.tsx";

export default function Footer() {
  return (
    <footer class="flex flex-row justify-center gap-4 pt-5">
      <a
        class="flex flex-row items-center gap-2 hover:underline focus:underline"
        href="https://fresh.deno.dev"
        rel="noopener noreferrer"
        target="_blank"
      >
        <LemonIcon alt="Fresh logo" />
        <span>Made with Fresh</span>
      </a>

      <a
        class="flex flex-row items-center gap-2 hover:underline focus:underline"
        href="https://github.com/jiawei397/yaml_to_ts_web"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon alt="GitHub logo" />
        <span>View Source</span>
      </a>
    </footer>
  );
}
