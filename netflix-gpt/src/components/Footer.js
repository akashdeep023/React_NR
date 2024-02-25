import React from "react";

const Footer = () => {
	return (
		<div className="relative">
			<div className="absolute bottom-0 w-full ps-10 sm:ps-[10%] py-10 sm:py-16 flex flex-col items-start justify-center gap-8 bg-black/70  text-white ">
				<div>Questions? Call 000-800-919-1694</div>
				<ul className="flex flex-wrap justify-start font-light underline decoration-from-font">
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8  ">
						<span className="cursor-pointer hover:font-semibold">FAQ</span>
					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
                        <span className="cursor-pointer hover:font-semibold">Help Centre</span>

					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
                        <span className="cursor-pointer hover:font-semibold">Terms of Use</span>

					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
                        <span className="cursor-pointer hover:font-semibold">Privacy</span>

					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
                        <span className="cursor-pointer hover:font-semibold">Cookie Preferences</span>

					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
                        <span className="cursor-pointer hover:font-semibold">Corporate Information</span>
					</li>
				</ul>
				<div>
					<select
						name="language"
						className="outline-none py-2 ps-4 bg-black font-semibold border border-gray-400 rounded-md cursor-pointer"
					>
						<option value="English">English</option>
						<option value="French">French</option>
						<option value="German">German</option>
						<option value="Italian">Italian</option>
						<option value="Spanish">Spanish</option>
						<option value="Portuguese">Portuguese</option>
						<option value="Russian">Russian</option>
						<option value="Chinese">Chinese</option>
						<option value="Japanese">Japanese</option>
						<option value="Korean">Korean</option>
						<option value="Vietnamese">Vietnamese</option>
						<option value="Polish">Polish</option>
						<option value="Arabic">Arabic</option>
						<option value="Hindi">Hindi</option>
						<option value="Thai">Thai</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Footer;
