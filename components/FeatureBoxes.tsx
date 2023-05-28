import FeatureBox from "./FeatureBox";

const FeatureBoxes = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <FeatureBox title="Increased Efficiency" icon="/placeholder--36x36.jpg">
        Lorem ipsum dolor sit amet consectetur.
      </FeatureBox>
      <FeatureBox title="Increased Efficiency" icon="/placeholder--36x36.jpg">
        Lorem, ipsum dolor sit amet consectetur adipisicing.
      </FeatureBox>
      <FeatureBox title="Increased Efficiency" icon="/placeholder--36x36.jpg">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </FeatureBox>
      <FeatureBox title="Increased Efficiency" icon="/placeholder--36x36.jpg">
        Lorem ipsum dolor sit amet consectetur.
      </FeatureBox>
    </div>
  );
};

export default FeatureBoxes;
