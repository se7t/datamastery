import Logo from "./Logo";
import Menu from "./Menu";
import Button from "./Button";

const Header = () => {
  return (
    // TODO: Add mobile menu
    <header className="container mx-auto my-8 flex items-baseline justify-between px-8 lg:px-16">
      <Logo />
      <Menu />
      <div className="hidden flex-wrap justify-start gap-4 sm:flex">
        <Button type="tertiary">Log In</Button>
        <Button type="primary">Get Started Now</Button>
      </div>
    </header>
  );
};

export default Header;
