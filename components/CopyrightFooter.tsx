const CopyrightFooter = () => {
  const currentDate = new Date();

  return (
    <div className="container-fluid bg-neutral-800 py-8 md:py-16">
      <div className="container mx-auto px-8">
        <a className="mx-auto mb-4 block w-fit cursor-pointer font-atlalabs text-3xl text-atlalabs-primary">
          ATLA<span className="text-atlalabs-secondary">LABS</span>
        </a>
        <p className="text-center text-sm font-medium tracking-wide text-white">
          Developed by ATLALABS © {currentDate.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default CopyrightFooter;
