import { Secular_One } from "next/font/google";
const secular_one = Secular_One({ weight: "400", subsets: ["latin"] });

const Logo = () => {
  return (
    <h2 className={`${secular_one.className} text-2xl leading-none`}>
      DataMastery
    </h2>
  );
};

export default Logo;
