import SHomePage from "./style";
import SHomePageHeader from "./HomePageHeader";

export default function HomePage() {
  return (
    <main>
      <SHomePageHeader />
      <SHomePage>
        <article className="VS" />
        <article className="heros">Heros du jour</article>
      </SHomePage>
    </main>
  );
}
