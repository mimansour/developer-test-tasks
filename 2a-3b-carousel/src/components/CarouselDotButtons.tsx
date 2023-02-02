const CarouselDotButtons = (props: {
  imageList: string[];
  activeIndex: number;
  onDotClick: (imgIndex: number) => void;
}) => {
  const getDotsStyle = (index: number) =>
    `w-3 h-3 rounded-full mt-4 mx-1 hover:bg-gray-300 dark:hover:bg-gray-200 ${
      index === props.activeIndex
        ? "bg-gray-300 dark:bg-gray-200"
        : "bg-gray-600 dark:bg-gray-500"
    }`;

  return (
    <div>
      {props.imageList.map((_item, index) => (
        <button
          key={index}
          aria-label={`click to display image number ${index}`}
          className={getDotsStyle(index)}
          onClick={() => props.onDotClick(index)}
        />
      ))}
    </div>
  );
};

export default CarouselDotButtons;
