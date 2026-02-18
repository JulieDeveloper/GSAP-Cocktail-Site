import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navigation.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
	return (
		<main>
			<Navbar />
			<div className='h-dvh bg-white'></div>
		</main>
	);
};

export default App;
