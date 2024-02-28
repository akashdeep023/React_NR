import React from "react";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
	const langCode = useSelector((store) => store.config.lang);
	return (
		<div className="mt-40  flex justify-center sticky top-20 z-20">
			<form
				className="grid grid-cols-12 w-[50%] bg-black/60 p-3 rounded-full font-light text-lg"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					className="col-span-9 px-6 py-2 rounded-s-full text-center text-black outline-none"
					type="text"
					placeholder={lang[langCode].placeholder}
				/>
				<button className="col-span-3 rounded-r-full bg-red-700 hover:border-red-800 active:bg-red-900 outline-none">
					{lang[langCode].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
