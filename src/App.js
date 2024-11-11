
import { useState } from "react";
import Header from './component/Header';
import Hero from './component/home/Hero'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <Hero/>
      </main>

    </div>
  );
}

export default App;
