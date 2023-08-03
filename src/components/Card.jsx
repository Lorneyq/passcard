import { useState, useEffect } from "react";
import FrontSide from "./Card/FrontSide";
import BackSide from "./Card/BackSide";
import Switch from "./UI/Switch";

const Card = () => {
  const [isSelected, setIsSelected] = useState(
    localStorage.getItem("PassCardList") === "true"
  );

  useEffect(() => {
    localStorage.setItem("PassCardList", isSelected);
  }, [isSelected]);

  const flipCard = () => {
    setIsSelected(!isSelected);
  };

  const firstSelect = () => {
    setIsSelected(false);
  };

  const secondSelect = () => {
    setIsSelected(true);
  };

  return (
    <>
      <div
        className={`block relative bg-main-color mobile:m-auto mobile:mt-20 mx-3 mt-14 z-20 rounded-4xl mobile:py-4 mobile:px-8 py-3 px-6 ${
          isSelected ? "mobile:w-110 w-none " : "mobile:w-96 w-none"
        }`}
      >
        <FrontSide visible={!isSelected} />
        <BackSide visible={isSelected} />
      </div>
      <Switch
        isSelected={isSelected}
        select={flipCard}
        firstName="Classic"
        secondName="List"
        firstSelect={firstSelect}
        secondSelect={secondSelect}
        className="relative mt-12 z-10"
      />
    </>
  );
};

export default Card;
