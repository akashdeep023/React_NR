import React from "react";
import { useSelector } from "react-redux";
import MoviesPlayer from "./MoviesPlayer";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);
	if (!movies?.nowPlayingMovies) return;
	return (
		<div className="p-2 relative -mt-[300px] z-40">
			<MoviesPlayer
				title={"Now Player Movies"}
				movies={movies.nowPlayingMovies}
			/>
			<MoviesPlayer
				title={"Top Rated Movies"}
				movies={movies.topRatedMovies}
			/>
			<MoviesPlayer
				title={"Popular Movies"}
				movies={movies.popularMovies}
			/>
			<MoviesPlayer
				title={"Upcoming Movies"}
				movies={movies.upcomingMovies}
			/>
			{/* <MoviesPlayer title={"Trending Movies"} />
			<MoviesPlayer title={"Horror Movies"} /> */}
		</div>
	);
};

export default SecondaryContainer;
