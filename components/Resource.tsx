import Image from "next/image";
import Tag from "./Tag";

interface ResourceProps {
  tags: string[];
  children: string;
}

const Resource = (props: ResourceProps) => {
  return (
    <div className="flex flex-col justify-start overflow-hidden rounded-lg shadow-lg">
      <Image
        src="/placeholder--380x180.jpg"
        width={380}
        height={180}
        alt="Resource Placeholder"
        className="w-full"
      />
      <div className="flex h-full flex-col justify-start gap-2 p-4">
        <div className="flex flex-wrap gap-3">
          <Tag>{props.tags[0]}</Tag>
          <Tag>{props.tags[1]}</Tag>
        </div>
        <h4 className="text-lg font-medium">{props.children}</h4>
        <a className="text-md mt-auto cursor-pointer pt-2 font-medium text-blue-600">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Resource;
