const Menu = () => {
  return (
    <ul className="hidden justify-center gap-8 align-baseline font-medium xl:ml-28 xl:flex">
      <li className="cursor-pointer">
        <a>Products</a>
      </li>
      <li className="cursor-pointer">
        <a>Solutions</a>
      </li>
      <li className="cursor-pointer">
        <a>Resources</a>
      </li>
      <li className="cursor-pointer">
        <a>Pricing</a>
      </li>
    </ul>
  );
};

export default Menu;
