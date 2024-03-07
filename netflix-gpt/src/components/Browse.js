import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptContainer from "./GptContainer";
import MovieInfo from "./MovieInfo";
// import Footer from "./Footer";

const Browse = () => {
	const gptSearchPage = useSelector((store) => store.gpt.gptSearchPage);
	const { page } = useSelector((store) => store.movies?.movieInfo);
	useNowPlayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpcomingMovies();
	return (
		<div className="bg-black min-h-screen min-w-screen text-white">
			<Header />
			{gptSearchPage ? (
				<GptContainer />
			) : (
				<div className="">
					<MainContainer />
					<SecondaryContainer />
				</div>
			)}
			{page && (
				<div
					onScroll={(event) => {
						event.stopPropagation();
						console.log("scrolling");
						console.log(event);
					}}
					className="fixed top-0 backdrop-blur-sm p-2 w-full h-full flex items-center justify-center z-50"
				>
					<MovieInfo />
				</div>
			)}
			{/* <Footer /> */}
		</div>
	);
};

export default Browse;
