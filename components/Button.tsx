interface ButtonProps {
  type: string;
  children: any;
}

const Button = (props: ButtonProps) => {
  return (
    <a
      href="javascript:void(0)"
      className={`text-md block h-fit w-full rounded-md border-2 px-7 py-2 text-center text-lg font-medium transition-colors sm:w-fit ${
        props.type === "primary"
          ? "border-blue-600 bg-blue-600 text-white  hover:border-blue-500 hover:bg-blue-500"
          : props.type === "secondary"
          ? "border-gray-200 bg-white text-blue-600 hover:border-blue-300"
          : props.type === "tertiary"
          ? " border-transparent bg-white text-blue-600 hover:underline"
          : ""
      }`}
    >
      {props.children}
    </a>
  );
};

export default Button;
