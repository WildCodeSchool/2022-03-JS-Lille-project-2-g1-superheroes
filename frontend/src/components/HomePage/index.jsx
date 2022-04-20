import SHomePage from "./style";
import SHomePageHeader from "./HomePageHeader";
export default function HomePage() {
  return (
    <main>
      <SHomePageHeader />
      <SHomePage>
        <article class="VS"></article>
        <article class="heros">Heros du jour</article>
      </SHomePage>
    </main>
  );
}
