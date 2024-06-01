import React, { useEffect, useState } from "react";
import panda from "./assets/pandaloading.webp";
const Card = ({ title, description, imageUrl, tag }) => {
  //for loading effect
  const [loading, setLoading] = useState(true);
  //for the onClick transition
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // delayed data loading for the lazy loading like effect
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //there are a lot of repetitive classes in the tailwind styling. these won't be so much in the bigger projects as we make reusable components and classes for these. for eg: the capsules in loader can be reduced to one component, the reused colors can be defined in the tailwind config file etc.
  return (
    <div className="rounded-lg overflow-hidden w-full aspect-[5/8] group bg-indigo-200">
      {loading ? (
        //the placeholder loader component which will show until the data loads (2 seconds in this case)
        <>
          <div className="w-full h-auto aspect-[4/5] flex justify-center items-center bg-slate-500/30">
            <img
              src={panda}
              className="w-1/2 h-auto aspect-square animate-bounce opacity-80"
            />
          </div>
          <div className=" w-full pt-4 p-2 flex flex-col gap-4 justify-center items-center bg-slate-400/30 pb-10">
            <div className=" bg-gray-400 h-6 w-1/3 rounded-xl"></div>
            <div className="bg-gray-400 h-4 w-1/2 rounded-xl animate-pulse" />
            <div className=" bg-gray-400 mb-1 h-3 w-1/6 rounded-xl animate-pulse" />
          </div>
        </>
      ) : (
        <>
          <div
            //changing image size on click: taking full card on one click and then coming back to normal on next click
            onClick={() => setClicked((clicked) => !clicked)}
            className={`relative overflow-hidden w-full cursor-pointer rounded-md ${
              clicked ? "aspect-[5/8]" : "aspect-[4/5]"
            }`}
          >
            <img
              //this is how we use the images imported with the vite importer fn
              src={imageUrl.default}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-xl p-2"
             
            />
          </div>

          {
            //the card info which will be hidden when the user clicks and we have to transition the image into full card
            !clicked && (
              <div className="p-2 rounded-lg flex flex-col justify-start items-center bg-indigo-200 w-full h-auto aspect-[3/1] ">
                <h2 className="text-2xl text-center sm:text-xl font-semibold mb-1 w-full">
                  {title}
                </h2>
                <p className="mb-2 text-xl text-black/80 sm:text-lg font-serif text-center">
                  {description}
                </p>
                {tag.length > 0 && (
                  <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1 rounded-xl text-center">
                    {tag}
                  </div>
                )}
              </div>
            )
          }
        </>
      )}
    </div>
  );
};

export default Card;
