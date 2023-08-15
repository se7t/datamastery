import Image from "next/image";

interface BlogItemProps {
  children: string;
  featuredImage: string;
  featuredImageAlt: string;
}

const BlogItem = (props: BlogItemProps) => {
  return (
    <div className="flex overflow-hidden rounded-lg shadow-lg">
      <div className="w-28 h-28 shrink-0">
        <Image
          // reusing the image from the resources section to avoid loading another one
          src={props.featuredImage}
          width={380}
          height={180}
          alt={props.featuredImageAlt}
          className="w-full h-full object-cover object-top-left"
        />
      </div>
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
