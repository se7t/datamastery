import Image from "next/image";

interface FeatureBoxProps {
  title: string;
  icon: string;
  children: any;
}

const FeatureBox = (props: FeatureBoxProps) => {
  return (
    <div className="flex flex-col items-center justify-start gap-4 rounded-lg p-4 shadow-lg xl:items-start">
      <h3 className="text-center text-lg font-semibold xl:text-left">
        {props.title}
      </h3>
      <p className="text-center text-sm text-neutral-600 xl:text-left">
        {props.children}
      </p>
      <Image
        src={props.icon}
        alt={`${props.title} Icon`}
        width={36}
        height={36}
        className="mt-auto"
      />
    </div>
  );
};

export default FeatureBox;
