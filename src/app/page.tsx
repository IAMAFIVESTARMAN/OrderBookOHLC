import FooterElement from "./LandingPage/FooterElement";
import HeroElement from "./LandingPage/HeroElement";
import SectionProducts from "./LandingPage/SectionProducts";

export default function Home() {
  return (
    <>
      <header className="p-5"></header>
      <main>
        <HeroElement></HeroElement>
        <SectionProducts></SectionProducts>
      </main>
      <FooterElement></FooterElement>
    </>
  );
}
