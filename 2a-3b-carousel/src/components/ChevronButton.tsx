import ChevronRightIcon from "./ChevronRight";

const ChevronButton = (props: {
  onClick: () => void;
  disabled: boolean;
  ariaLabel: string;
}) => (
  <button
    className={`w-6 disabled:opacity-50 enabled:transition ${
      props.ariaLabel === "previous page"
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

export default ChevronButton;
