import { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
      <div className="dark:bg-black relative">
      <NavBar theme={theme} setTheme={setTheme} />
      <Hero />
      </div>
  );
}

export default App;
