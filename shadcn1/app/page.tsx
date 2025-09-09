// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Image from "next/image";

import {
  CarouselHeader,
  Footer,
  MenuBar,
  SectionContainer,
} from "@/components/my";

function Home() {
  return (
    <div>
      <MenuBar />
      <CarouselHeader />

      <div className="flex justify-center">
        <SectionContainer />
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Home;
