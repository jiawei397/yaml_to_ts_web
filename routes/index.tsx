import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import YamlToTs from "../islands/YamlToTs.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <div class="p-4 w-full">
        <YamlToTs />
      </div>
      <Footer />
    </>
  );
}
