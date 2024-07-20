import { useState, useEffect } from "react";
import { Header, Main, Footer } from "./components";
import {chevronUp} from './assets/images'

function App() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setScrollY(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrollY={scrollY} />
      <Main />
      <Footer />

      <a
        href="#top"
        className={`back-top-btn ${scrollY > 100 && "active"}`}
        aria-label="back top top"
        data-back-top-btn
      >
       <div className="ion-icon" style={{maskImage: `url(${chevronUp})` }} aria-hidden="true"></div>
      </a>
    </>
  );
}

export default App;
