import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
// import Footer from "./Footer";

const Browse = () => {
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();
	return (
		// <div className="bg-gradient-to-b from-black min-h-screen min-w-screen text-white">
		<div className="bg-black min-h-screen min-w-screen text-white">
			<Header />
			<div className="">
				<MainContainer />
				<SecondaryContainer />
			</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Browse;
