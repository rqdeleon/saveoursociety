import About from "@/components/sections/aboutus";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import Mission from "@/components/sections/mission";
import Projects from "@/components/sections/project";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Mission />
      <Footer />
    </>
  );
}
