import { useEffect, useState } from "react";
import { ImageGroup } from "../data/images";
import CarouselChevronButton from "./CarouselChevronButton";
import CarouselDotButtons from "./CarouselDotButtons";

const ImageCarousel = (props: { imgGroup: ImageGroup }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const imageList = props.imgGroup.images.map((item) => item.img);

  useEffect(() => {
    setActiveIndex(0);
  }, [props.imgGroup]);

  const onNextClick = () => {
    setActiveIndex(activeIndex + 1);
  };

  const onPreviousClick = () => {
    setActiveIndex(activeIndex - 1);
  };

  return (
    <div className="text-center">
      <h2 className="md:text-2xl text-xl pb-6 pt-10 font-semibold uppercase">
        {props.imgGroup.name}
      </h2>
      <div className="flex md:gap-x-10 gap-x-2">
        <CarouselChevronButton
          onClick={() => onPreviousClick()}
          disabled={activeIndex === 0}
          ariaLabel="previous image"
          direction="left"
        />
        <img
          className="md:h-80 md:w-96 w-72 h-56 shadow-lg object-cover rounded"
          src={imageList[activeIndex]}
          alt={props.imgGroup.images[activeIndex].altText}
        />
        <CarouselChevronButton
          onClick={() => onNextClick()}
          disabled={activeIndex === imageList.length - 1}
          ariaLabel="next image"
          direction="right"
        />
      </div>
      <CarouselDotButtons
        imageList={imageList}
        activeIndex={activeIndex}
        onDotClick={setActiveIndex}
      />
    </div>
  );
};

export default ImageCarousel;
