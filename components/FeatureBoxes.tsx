import FeatureBox from "./FeatureBox";

const FeatureBoxes = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <FeatureBox title="Efficiency Boost" icon="/placeholder--36x36.jpg">
        Maximize productivity with streamlined processes.
      </FeatureBox>
      <FeatureBox title="Data Insights" icon="/placeholder--36x36.jpg">
        Uncover actionable insights from your data.
      </FeatureBox>
      <FeatureBox title="Task Optimizations" icon="/placeholder--36x36.jpg">
        Optimize workflows for seamless task management.
      </FeatureBox>
      <FeatureBox title="Data-Driven Growth" icon="/placeholder--36x36.jpg">
        Fuel business growth through data-driven strategies.
      </FeatureBox>
    </div>
  );
};

export default FeatureBoxes;
