import React, { useContext } from "react";
import CoronaVirus from "./CoronaVirus";
import Theme from "./context";

function Home() {
  const { theme, setTheme } = useContext(Theme);

  return (
    <>
      <h1>Home</h1>
      <CoronaVirus />
	    <button color={ theme ? "dark" : "primary" }
		  onClick={() => {
            setTheme(!theme);
          }}>{ theme ? "Dark" : "Ligth" }
        </button>
    </>
  );
};

export default Home;