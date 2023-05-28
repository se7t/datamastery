import Button from "@/components/Button";
import Image from "next/image";
import FeatureBoxes from "./FeatureBoxes";

const Hero = () => {
  return (
    <section className="container mx-auto my-16">
      <div className="mb-16 flex flex-col gap-16 xl:grid xl:auto-cols-fr xl:grid-flow-col xl:items-stretch">
        <div className="flex flex-col justify-center gap-12">
          <h1 className="text-5xl font-bold leading-tight">
            DataMastery
            <br />
            Solutions
          </h1>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
            sint ipsa velit qui vero dolore labore unde cum. Asperiores,
            exercitationem cum! Voluptas sequi exercitationem amet dignissimos
            architecto magnam, excepturi corrupti saepe iusto expedita ullam.
          </p>
          <div className="flex flex-wrap justify-start gap-4">
            <Button type="primary">Start Your Free Trial Today</Button>
            <Button type="tertiary">Request A Demo</Button>
          </div>
        </div>
        <div>
          <Image
            src="/placeholder--570x388.jpg"
            alt="Placeholder"
            width={570}
            height={388}
            className=" mx-auto xl:ml-auto xl:mr-0"
          />
        </div>
      </div>
      <FeatureBoxes />
    </section>
  );
};
export default Hero;
