import Card from "./Card";
import data from "./data.json";
//importing all images at once using vite's import.meta.glob function
const images = import.meta.glob( "./assets/*.webp", { eager: true } );
const Home = () => {
  return (
    //snap styles for perfectly fitting the cards in the viewport. now every scroll will stop at the end of some card and won't cut any card
    <div className="h-screen bg-violet-100 overflow-x-auto snap-x snap-mandatory scroll-smooth">
      <h1 className="text-3xl m-6 text-center font-semibold font-mono absolute w-screen">
        MAP Frontend
      </h1>
      <div className="flex pt-20">
        {data.map((card, index) => (
          <div
            key={index}
            //responsive layouts for all screen sizes
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 aspect-[5/8] h-auto snap-start shrink-0 p-4 flex items-center justify-center  transition duration-500"
          >
            <Card
              title={card.title}
              description={card.description}
              //passing the matching image from imported images as prop to card
              imageUrl={images[`./assets/${card.imageUrl}.webp`]}
              tag={card.tag}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
