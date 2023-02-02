import { useState } from "react";
import DarkModeToggle from "./components/DarkmodeToggle";
import Footer from "./components/Footer";
import ImageContainer from "./components/ImageContainer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="bg-slate-100 h-full h-min-screen dark:bg-gray-800 dark:text-stone-100">
        <span className="flex justify-end pt-10 pr-14">
          <DarkModeToggle
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
          />
        </span>
        <div className="flex flex-col items-center">
          <h1 className="pb-6 text-5xl uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-400">
            Image carousel
          </h1>
          <ImageContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
