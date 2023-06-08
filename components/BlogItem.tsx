import Image from "next/image";

interface BlogItemProps {
  children: string;
}

const BlogItem = (props: BlogItemProps) => {
  return (
    <div className="flex overflow-hidden rounded-lg shadow-lg">
      <Image
        src="/placeholder--105x105.jpg"
        width={105}
        height={105}
        alt="Blog post"
        className="h-28 w-28"
      />
      <div className="flex flex-col justify-between p-4">
        <p className="max-w-prose text-sm">{props.children}</p>
        <a className="text-md mt-auto cursor-pointer pt-2 font-medium text-blue-600">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
