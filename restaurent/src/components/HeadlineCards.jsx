import React, { useState } from "react";
import Cards from "./Cards";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const HeadlineCards = () => {
  const details = [
    {
      first: "Sun's Out, BOGO's Out",
      second: "Through 24/7",
      url: "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60",
    },
    {
      first: "Cheese Tacos",
      second: "Spicy Mexican Snack",
      url: "https://plus.unsplash.com/premium_photo-1679231520631-fe247bce256f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlZXNlJTIwdGFjb3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      first: "Chicken Noodles",
      second: "Tasty Stir Fried Noodles",
      url: "https://plus.unsplash.com/premium_photo-1664475934279-2631a25c42ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFtZW58ZW58MHx8MHx8fDA%3D",
    },
    {
      first: "Butter Chicken",
      second: "All time Favorite",
      url: "https://plus.unsplash.com/premium_photo-1675864532835-6e47099cca6f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpY2tlbiUyMGNoaWxsaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      first: "Sai Ying Pun",
      second: "Hong Kong High Street",
      url: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RmlzaCUyMGRpc2h8ZW58MHx8MHx8fDA%3D",
    },
  ];

  const [curIdx, setCurrIdx] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = curIdx === 0;
    const newIdx = isFirstSlide ? details.length - 1 : curIdx - 1;
    setCurrIdx(newIdx);
  };

  const nextSlide = () => {
    const isLastSlide = curIdx === details.length - 1;
    const newIdx = isLastSlide ? 0 : curIdx + 1;
    setCurrIdx(newIdx);
  };

  const gotoSlide = (slideIdx) => {
    setCurrIdx(slideIdx);
  };

  return (
    <div className="w-[500px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Today's Highlights
      </h1>

      <div className=" m-auto py-2 rounded-3xl px-4 relative group">
        <Cards details={details[curIdx]} />

        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-orange-600 cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-orange-600 cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex justify-center py-1">
          {details.map((slide, slideIdx) => (
            <div
              key={slideIdx}
              onClick={() => gotoSlide(slideIdx)}
              className=" text-gray-500 text-2xl cursor-pointer hover:text-orange-500"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlineCards;
