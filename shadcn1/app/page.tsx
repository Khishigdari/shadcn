// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Image from "next/image";

import { CarouselHeader, Footer, SectionContainer } from "@/components/my";

function Home() {
  return (
    <div>
      <CarouselHeader />

      <div className="flex justify-center">
        <SectionContainer />
      </div>
    </div>
  );
}
export default Home;
