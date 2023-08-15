import FeatureBox from "./FeatureBox";
import PresentationChartIcon from "./icons/PresentationChartIcon";
import RectagleStackIcon from "./icons/RectagleStackIcon";
import RocketIcon from "./icons/RocketIcon";
import StackIcon from "./icons/StackIcon";

const FeatureBoxes = () => {
  return (
    <section className="container mx-auto my-24 px-8 md:my-32 lg:px-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <FeatureBox title="Efficiency Boost" icon={<RocketIcon />}>
          Maximize productivity with streamlined processes.
        </FeatureBox>
        <FeatureBox title="Data Insights" icon={<StackIcon />}>
          Uncover actionable insights from your data.
        </FeatureBox>
        <FeatureBox title="Task Optimizations" icon={<RectagleStackIcon />}>
          Optimize workflows for seamless task management.
        </FeatureBox>
        <FeatureBox title="Data-Driven Growth" icon={<PresentationChartIcon />}>
          Fuel business growth through data-driven strategies.
        </FeatureBox>
      </div>
    </section>
  );
};

export default FeatureBoxes;
