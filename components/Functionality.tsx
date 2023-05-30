import Image from "next/image";
import Button from "./Button";

interface FunctionalityProps {
  direction: "normal" | "reverse";
  category: string;
  title: string;
  callToAction: string;
  imageUrl: string;
  children: string;
}

const Functionality = (props: FunctionalityProps) => {
  return (
    <div
      className={`flex flex-col-reverse justify-between gap-16 lg:items-stretch lg:gap-36 ${
        props.direction === "normal"
          ? "lg:flex-row"
          : props.direction === "reverse"
          ? "lg:flex-row-reverse"
          : ""
      }`}
    >
      <div className="flex grow basis-1/2 flex-col justify-center gap-6 lg:gap-8">
        <h4 className="text-lg font-bold text-blue-700">{props.category}</h4>
        <h3 className="text-center text-2xl font-bold leading-tight sm:text-3xl lg:text-left">
          {props.title}
        </h3>
        <p className="text-center text-lg font-light lg:text-left">
          {props.children}
        </p>
        <div className="mx-auto lg:ml-0">
          <Button type="primary">{props.callToAction}</Button>
        </div>
      </div>
      <Image
        src={props.imageUrl}
        alt={`${props.title} Placeholder`}
        width={570}
        height={388}
        className="mx-auto shrink grow-0 basis-1/2"
      />
    </div>
  );
};

export default Functionality;
