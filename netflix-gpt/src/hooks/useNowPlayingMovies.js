import { MOVIES_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
	const dispatch = useDispatch();
	const getNowPlayingMovies = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/now_playing?page=1",
				MOVIES_OPTIONS
			);
			const json = await response.json();
			console.log(json.results);
			dispatch(addNowPlayingMovies(json.results));
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getNowPlayingMovies();
	}, []);
};

export default useNowPlayingMovies;
