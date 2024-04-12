import React from "react";
import Cards from "./Cards";

const HeadlineCards = () => {
  const details = [
    { first: "Sun's Out, BOGO's Out", second: "Through 24/7" },
    { first: "New Restaurants", second: "Added Daily" },
    { first: "We Deliver Desserts Too", second: "Tasty Treats" },
  ];
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <Cards details={details[0]} />
      <Cards details={details[1]} />
      <Cards details={details[2]} />
    </div>
  );
};

export default HeadlineCards;
