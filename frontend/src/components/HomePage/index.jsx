import SHomePage from "./style";
import SHomePageHeader from "./HomePageHeader";
import Jarvis from "../Jarvis";

export default function HomePage() {
  return (
    <main>
      <SHomePageHeader />
      <SHomePage>
        <Jarvis />
      </SHomePage>
    </main>
  );
}
