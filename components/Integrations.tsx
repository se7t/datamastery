import Image from "next/image";
import Button from "@/components/Button";

const Integrations = () => {
  return (
    <section className="container-fluid my-24 flex flex-col gap-24 bg-slate-50 py-24 md:my-32 md:py-32 xl:gap-32 ">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="mb-16 flex flex-col-reverse gap-16 xl:grid xl:auto-cols-fr xl:grid-flow-col xl:items-stretch">
          <div className="flex flex-col justify-center gap-12">
            <h2 className="text-3xl font-bold leading-tight sm:text-3xl">
              Powerful Integration Ecosystem for Enhanced Efficiency
            </h2>
            <p className="text-lg font-light">
              Discover a seamless integration ecosystem that amplifies your
              efficiency and productivity. Our versatile platform effortlessly
              integrates with your existing software, enabling smooth data flow
              and eliminating silos. Experience the freedom of streamlined
              processes, enhanced collaboration, and optimized workflows. Unlock
              the true potential of your business with our powerful integration
              solutions with DataMastery.
            </p>
            <Button type="primary">Unlock Seamless Integration Now</Button>
          </div>
          <div>
            <Image
              src="/seamless-integration.jpg"
              alt="Placeholder"
              width={570}
              height={388}
              className="mx-auto xl:mr-0 mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
