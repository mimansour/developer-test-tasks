import moonIcon from "../assets/icons/moonIcon.svg";
import sunIcon from "../assets/icons/sunIcon.svg";

const DarkmodeToggle = (props: {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const darkModeToggleStyle =
    "w-12 bg-gray-400 p-3 dark:p-2 dark:bg-amber-400 shadow-sm rounded-xl hover:scale-110 transition-all ease-in-out duration-400";

  return (
    <button
      onClick={() => props.setIsDarkMode(!props.isDarkMode)}
      aria-label="darkmode toggle button"
    >
      <img
        src={props.isDarkMode ? sunIcon : moonIcon}
        alt=""
        className={darkModeToggleStyle}
      />
    </button>
  );
};

export default DarkmodeToggle;
