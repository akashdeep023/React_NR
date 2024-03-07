import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_IMG_URL } from "../utils/constants";
import { setMovieInfoTrailerPage, toggleMovieInfo } from "../utils/moviesSlice";
import useMovieInfoTrailer from "../hooks/useMovieInfoTrailer";

const MovieInfo = () => {
	const { info } = useSelector((store) => store?.movies?.movieInfo);
	// const [toggleInfoVideo, setToggleInfoVideo] = useState(false);
	const movieInfoTrailer = useSelector(
		(store) => store.movies?.movieInfoTrailer
	);
	const movieInfoTrailerPage = useSelector(
		(store) => store.movies?.movieInfoTrailerPage
	);
	const dispatch = useDispatch();
	const handleMovieInfoPage = () => {
		dispatch(toggleMovieInfo());
		dispatch(setMovieInfoTrailerPage(false));
	};
	const handleMovieInfoPageVideo = () => {
		dispatch(setMovieInfoTrailerPage(false));
	};
	useMovieInfoTrailer(info?.id);
	const handleMovieInfoVideo = () => {
		dispatch(setMovieInfoTrailerPage(true));
	};
	return (
		<div
			id="movie-info"
			onScroll={(event) => {
				event.stopPropagation();
				console.log("scrolling");
			}}
			className={
				"relative bg-black mx-auto  min-h-[50%] w-[95%] sm:w-[80%] md:w-1/2 rounded-lg aspect-video border border-gray-400 overflow-y-scroll overflow-x-hidden no-scrollbar-custom"
			}
		>
			<i
				onClick={handleMovieInfoPage}
				className="fixed top-10 right-1 sm:right-5 md:right-10 opacity-90 text-3xl sm:text-4xl fa-solid fa-circle-xmark fa-shake cursor-pointer"
			></i>
			{!movieInfoTrailerPage ? (
				<div className="p-2 sm:p-4">
					<h1 className="text-lg sm:text-xl md:text-2xl font-bold my-2 mb-1 sm:mb-3">
						➡️{info?.title}
					</h1>
					<div className="flex justify-between flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm md:text-base">
						<img
							className="w-32 h-48 sm:w-36 sm:h-56 rounded-lg"
							src={CDN_IMG_URL + info?.poster_path}
						></img>
						<div className="flex flex-col gap-1 sm:gap-2">
							<p className="opacity-60">
								<b>Language :</b> {info?.original_language}
							</p>
							<p className="opacity-60">
								<b>Popularity :</b> {info?.popularity} ❤️
							</p>
							<p className="opacity-60">
								<b>Release Date :</b> {info?.release_date}
							</p>
							<p className="opacity-60">
								<b>Total Vote :</b> {info?.vote_count} ⚡
							</p>
							<p className="opacity-60 text-justify">
								<b>Overview :</b> {info?.overview}
							</p>
						</div>
					</div>
					<button
						className="my-4 px-2 sm:px-3 md:px-4  py-1 sm:py-2  bg-white text-black rounded-md cursor-pointer border border-slate-500 font-semibold sm:text-base md:text-lg text-sm"
						onClick={handleMovieInfoVideo}
					>
						Play
					</button>
				</div>
			) : (
				<>
					<div className="absolute top-0 w-full h-full overflow-hidden flex items-center bg-black rounded-lg">
						<iframe
							className="w-full aspect-video overflow-hidden"
							src={
								"https://www.youtube.com/embed/" +
								movieInfoTrailer?.key +
								"?autoplay=1&controls=0&showinfo=0"
							}
							allow="autoplay"
						></iframe>
					</div>
					<div className="absolute top-0 w-full h-full overflow-hidden flex items-center bg-black justify-center invisible sm:visible sm:opacity-0 sm:hover:opacity-60">
						<i
							onClick={handleMovieInfoPageVideo}
							className="opacity-90 text-3xl sm:text-4xl fa-solid fa-circle-xmark fa-shake cursor-pointer"
						></i>
					</div>
				</>
			)}
		</div>
	);
};

export default MovieInfo;
