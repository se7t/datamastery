import BlogItem from "./BlogItem";
import CopyrightFooter from "./CopyrightFooter";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <footer className="container-fluid mt-24 flex flex-col bg-slate-50 py-24 md:mt-32 md:py-32 xl:gap-32 ">
        <div className="container mx-auto grid grid-cols-1 justify-center gap-16 px-8 lg:grid-cols-2 lg:px-16 xl:grid-cols-3">
          <div className="">
            <Logo />
            <p className="mb-8 mt-6 font-light text-neutral-400">
              Empowering Industries
              <br /> through Disruptive
              <br />
              Technology
            </p>
            <div className="flex gap-8">
              <span className="block h-4 w-4 bg-blue-400"></span>
              <span className="block h-4 w-4 bg-blue-400"></span>
              <span className="block h-4 w-4 bg-blue-400"></span>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div>
              <h3 className="mb-5 text-lg font-medium">About</h3>
              <ul className="flex flex-col gap-4 font-light tracking-wide">
                <li>
                  <a className="cursor-pointer">About Us</a>
                </li>
                <li>
                  <a className="cursor-pointer">Blog</a>
                </li>
                <li>
                  <a className="cursor-pointer">Team</a>
                </li>
                <li>
                  <a className="cursor-pointer">Career</a>
                </li>
                <li>
                  <a className="cursor-pointer">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5 text-lg font-medium">Company</h3>
              <ul className="flex flex-col gap-4 font-light tracking-wide">
                <li>
                  <a className="cursor-pointer">Privacy</a>
                </li>
                <li>
                  <a className="cursor-pointer">Support</a>
                </li>
                <li>
                  <a className="cursor-pointer">Help Desk</a>
                </li>
                <li>
                  <a className="cursor-pointer">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-lg font-medium">Blog</h3>
            <div className="flex flex-col gap-5">
              <BlogItem
                featuredImage="/blog-future-of-digital-transformation-in-business.jpg"
                featuredImageAlt="DataMastery Blog - Webinar: The Future of Digital Transformation in Business"
              >
                Webinar: The Future of Digital Transformation in Business
              </BlogItem>
              <BlogItem
                featuredImage="/blog-essential-strategies-for-business-growth.jpg"
                featuredImageAlt="DataMastery Blog - 10 Essential Strategies for Business Growth"
              >
                10 Essential Strategies for Business Growth
              </BlogItem>
            </div>
          </div>
        </div>
      </footer>
      <CopyrightFooter />
    </>
  );
};

export default Footer;
