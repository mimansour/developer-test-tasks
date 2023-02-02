import ChevronRightIcon from "./ChevronRight";

const CarouselChevronButton = (props: {
  onClick: () => void;
  disabled: boolean;
  direction: "right" | "left";
  ariaLabel: string;
}) => (
  <button
    className={`md:w-6 w-4 disabled:opacity-50 enabled:transition ${
      props.direction === "left"
        ? "rotate-180 enabled:hover:-translate-x-1"
        : "enabled:hover:translate-x-1"
    }`}
    onClick={props.onClick}
    disabled={props.disabled}
    aria-label={props.ariaLabel}
  >
    <ChevronRightIcon />
  </button>
);

export default CarouselChevronButton;
