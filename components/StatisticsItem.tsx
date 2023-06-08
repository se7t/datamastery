interface StatisticsItemProps {
  stat: string;
  description: string;
}

const StatisticsItem = (props: StatisticsItemProps) => {
  return (
    <div>
      <h3 className="text-center text-3xl font-bold text-blue-700">
        {props.stat}
        <br />
        <span className="text-lg font-normal tracking-tight text-neutral-950">
          {props.description}
        </span>
      </h3>
    </div>
  );
};

export default StatisticsItem;
