import { useState } from "react";
import { ImageGroup, imageGroups } from "../data/images";
import ImageCarousel from "./ImageCarousel";

const CarouselContainer = () => {
  const [selectedImageGroup, setSelectedImageGroup] = useState<ImageGroup>(
    imageGroups[0]
  );

  const getButtonStyle = (title: string) => {
    return `p-1 uppercase text-gray-500 hover:text-gray-900 dark:hover:text-stone-100 hover:underline underline-offset-8 decoration-amber-500 ${
      selectedImageGroup.name === title
        ? "text-gray-900 dark:text-stone-100 underline"
        : "text-gray-500 dark:text-stone-100"
    }`;
  };

  return (
    <div className="text-center flex flex-col items-center">
      <p className="font-light">Select an image category from below.</p>
      <ul className="flex md:gap-x-4 gap-x-2 font-semibold text-xl pt-4 pb-10">
        {imageGroups.map((group) => (
          <li key={group.id}>
            <button
              className={getButtonStyle(group.name)}
              onClick={() => setSelectedImageGroup(group)}
            >
              {group.name}
            </button>
          </li>
        ))}
      </ul>
      <ImageCarousel imgGroup={selectedImageGroup} />
    </div>
  );
};

export default CarouselContainer;
