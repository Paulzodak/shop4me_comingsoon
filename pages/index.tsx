import "aos/dist/aos.css";
import { SectionOne } from "@/components/organisms/home/SectionOne";
export default function Home() {
  return (
    <div data-testid="home_component">
      {/* <Helmet title="Jobson" /> */}

      <SectionOne />
    </div>
  );
}
