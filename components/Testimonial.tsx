import Image from "next/image";

interface TestimonialProps {
  imageUrl: string;
  company: string;
  name: string;
  children: string;
}

const Testimonial = (props: TestimonialProps) => {
  return (
    <div className="relative mt-16 flex flex-col gap-6 rounded-md p-8 pt-24 shadow-lg">
      <Image
        src={props.imageUrl}
        alt={`${props.name} | ${props.company}`}
        width={100}
        height={100}
        className="absolute -top-14 left-1/2 mx-auto -translate-x-1/2 rounded-full"
      />

      <p className="text-center text-sm font-light text-neutral-900">
        {props.children}
      </p>

      <div className="mt-auto flex flex-col gap-6">
        <h3 className="text-center text-2xl font-bold text-neutral-300">
          {props.company}
        </h3>
        <h4 className="text-center text-lg font-semibold text-neutral-900">
          {props.name}
        </h4>
      </div>
    </div>
  );
};

export default Testimonial;
