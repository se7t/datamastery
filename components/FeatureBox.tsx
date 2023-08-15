import Image from "next/image";
import { ReactNode } from "react";

interface FeatureBoxProps {
  title: string;
  icon: ReactNode;
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
      {/* TODO: Refactor so that the icons are not passed as props */}
      <span className="mt-auto">{props.icon}</span>
    </div>
  );
};

export default FeatureBox;
