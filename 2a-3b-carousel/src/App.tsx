import { useState } from "react";
import DarkModeToggle from "./components/DarkmodeToggle";
import Footer from "./components/Footer";
import CarouselContainer from "./components/CarouselContainer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <div className={`${isDarkMode && "dark"}`}>
      <div className="bg-slate-100 h-full min-h-screen dark:bg-gray-800 dark:text-stone-100">
        <header className="flex justify-end pt-10 md:pr-20 md:pb-1 pr-4 pb-4">
          <DarkModeToggle
            isDarkMode={isDarkMode}
            onClick={() => setIsDarkMode(!isDarkMode)}
          />
        </header>
        <div className="flex flex-col items-center">
          <h1 className="pb-6 md:text-5xl text-4xl uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-red-400">
            Image carousel
          </h1>
          <CarouselContainer />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
