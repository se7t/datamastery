import Button from "@/components/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto my-16">
      <div className="mb-16 flex flex-col gap-16 xl:grid xl:auto-cols-fr xl:grid-flow-col xl:items-stretch">
        <div className="flex flex-col justify-center gap-12">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            DataMastery
            <br />
            Solutions
          </h1>
          <p className="text-lg font-light">
            Empower Your Business with DataMastery Solutions. Unleash the full
            potential of your data through advanced analytics, state-of-the-art
            technology, and seamless task management. Drive informed
            decision-making and achieve unrivaled success in the digital era
            with our expertise.
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
            className="mx-auto xl:mr-0"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
