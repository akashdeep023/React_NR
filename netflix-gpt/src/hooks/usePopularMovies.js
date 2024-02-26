import { MOVIES_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
	const dispatch = useDispatch();
	const getPopularMovies = async () => {
		try {
			const response = await fetch(
				"https://api.themoviedb.org/3/movie/popular?page=1",
				MOVIES_OPTIONS
			);
			const json = await response.json();
			dispatch(addPopularMovies(json.results));
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getPopularMovies();
	}, []);
};

export default usePopularMovies;
