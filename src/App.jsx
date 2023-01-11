import React, {useEffect, useState} from 'react';
import About from "./Components/About"
import Resume from "./Components/Resume"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Welcome from "./Components/Welcome"

function App() {


/* 
--------------------------WELCOME MESSAGE--------------------------
*/
	const [showSplash, setShowSplash] = useState(true);
    const onClick = () => {
		setShowSplash(false);

	}


/* 
--------------------------DARK THEME--------------------------
*/

  const [theme, setTheme] = useState(
	localStorage.getItem("theme") || "light"
  );

  const toggleTheme = () => {
	if(theme === "light") {
		setTheme("dark");
	} else {
		setTheme("light");
	}
};

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.className = theme;
	}, [theme]);

	const lightBulb = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none" viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01
				6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75
				2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823
				1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
			/>
		</svg>

	)


  return (
    <div className="App ${theme} font-robotoMono">
		<div id="splash-page" onClick={onClick}> {showSplash ? <Welcome /> : null}</div>
		<button
			type="button"
			onClick={toggleTheme}
			className="fixed p-4 z-10 right-20 top-20 rounded-full bg-neutral-400"
		>
			{lightBulb}
		</button>

		<div className="scroll-smooth bg-white dark:bg-zinc-900">
			<About />
			<Resume />
			<Projects />
			<Contact />
			<Footer />
		</div>
	</div>
  )
}

export default App
