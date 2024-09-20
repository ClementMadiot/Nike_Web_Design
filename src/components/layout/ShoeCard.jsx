import React from "react";

function ShoeCard({ imgURL, bigShoeImg, changeBigShoe }) {
  const handleClick = () => {
    if (bigShoeImg !== imgURL) {
      changeBigShoe(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 hover:scale-105 duration-150 ${
        bigShoeImg === imgURL.bigShoe 
        ? "border-coral-red hover:border-coral-red" 
        : "border-transparent"
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} alt={`shoe collection ${imgURL.thumbnail}`} width={127} height={103} className="object-contain" />
      </div>
    </div>
  );
}

export default ShoeCard;
