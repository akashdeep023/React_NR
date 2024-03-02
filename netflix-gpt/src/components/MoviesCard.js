import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const MoviesCard = ({ movies }) => {
	// console.log(movies);
	return (
		<div className="flex justify-start items-start gap-3 overflow-x-scroll w-full no-scrollbar-custom">
			{movies?.map((movie) => {
				if (!movie.poster_path) return null;
				return (
					<div
						key={movie.id}
						className="min-w-48 max-w-48 h-96 mt-2 hover:-translate-y-8 hover:scale-90 transition-all py-4"
					>
						<img
							className="object-cover cursor-pointer rounded-lg w-full h-72"
							src={CDN_IMG_URL + movie.poster_path}
							alt={movie.original_title}
						/>
						<p className="text-gray-300 font-semibold text-sm line-clamp-2">
							{movie.title}
						</p>
						<p className="text-gray-300 font-light text-sm">
							{movie.release_date}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default MoviesCard;
