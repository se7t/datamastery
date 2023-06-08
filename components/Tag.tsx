interface TagProps {
  children: string;
}

const Tag = (props: TagProps) => {
  return (
    <span className="block w-fit rounded-sm bg-blue-50 px-2 py-1 text-xs font-medium tracking-wide text-blue-600">
      {props.children}
    </span>
  );
};

export default Tag;
