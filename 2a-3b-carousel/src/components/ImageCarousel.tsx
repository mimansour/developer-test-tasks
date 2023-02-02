import { useEffect, useState } from "react";
import ChevronButton from "./ChevronButton";
import { ImageGroup } from "./ImageContainer";

const ImageCarousel = (props: { imgGroup: ImageGroup }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const imageList = props.imgGroup.images.map((item) => item.img);

  useEffect(() => {
    setActiveIndex(0);
  }, [props.imgGroup]);

  const onNext = () => {
    setActiveIndex(activeIndex + 1);
  };

  const onPrevious = () => {
    setActiveIndex(activeIndex - 1);
  };

  const dotsStyle = (index: number) =>
    ` w-3 h-3 rounded-full mt-4 mx-1 hover:bg-gray-300 dark:hover:bg-gray-200 ${
      index === activeIndex
        ? "bg-gray-300 dark:bg-gray-200"
        : "bg-gray-600 dark:bg-gray-500"
    }`;

  return (
    <div className="text-center">
      <h2 className="text-2xl pb-6 pt-10 font-semibold uppercase">
        {props.imgGroup.name}
      </h2>
      <div className="flex gap-x-10">
        <ChevronButton
          onClick={() => onPrevious()}
          disabled={activeIndex === 0}
          ariaLabel="previous page"
        />
        <img
          className="h-80 w-96 shadow-lg object-cover rounded"
          src={imageList[activeIndex]}
          alt={props.imgGroup.images[activeIndex].altText}
        />
        <ChevronButton
          onClick={() => onNext()}
          disabled={activeIndex === imageList.length - 1}
          ariaLabel="next page"
        />
      </div>
      <div>
        {imageList.map((_item, index) => (
          <button
            key={index}
            className={dotsStyle(index)}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
