const Menu = () => {
  const menuItems = ["Products", "Solutions", "Resources", "Pricing"];

  return (
    <ul className="hidden justify-center gap-8 align-baseline font-medium xl:ml-28 xl:flex">
      {menuItems.map((item, index) => {
        return (
          <li key={index} className="cursor-pointer">
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
