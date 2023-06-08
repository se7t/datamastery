import StatisticsItem from "./StatisticsItem";

const StatisticsList = () => {
  const statisticsItems = [
    { stat: "10+", description: "Years of Industry Expertise" },
    { stat: "500,000+", description: "Delighted Customers" },
    { stat: "99%", description: "Uptime Guarantee" },
    { stat: "24/7", description: "Dedicated Support" },
    { stat: "100%", description: "Data Security" },
  ];

  return (
    <section className="container mx-auto my-24 flex flex-wrap justify-center gap-24 px-8 md:my-32 lg:px-16 xl:gap-32">
      {statisticsItems.map((item, index) => {
        return (
          <StatisticsItem
            key={index}
            stat={item.stat}
            description={item.description}
          />
        );
      })}
    </section>
  );
};

export default StatisticsList;
