import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LANGUAGE_CODE } from "../utils/constants";
import { toggleGptSarch } from "../utils/gptSlice";
import { changeConfig } from "../utils/configSlice";
const HeaderHide = ({ setHeaderHide }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const gptSearch = useSelector((store) => store.gpt.gptSearchPage);
	const configLang = useSelector((store) => store.config.lang);
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				navigate("/error");
			});
	};
	const handleConfigLang = (e) => {
		dispatch(changeConfig(e.target.value));
		setHeaderHide(true);
	};
	const handleGptSearchPage = () => {
		dispatch(toggleGptSarch());
		setHeaderHide(true);
	};
	return (
		<div className="absolute right-0 top-8 sm:top-10 bg-black/90 border border-gray-300 p-5 rounded-lg w-44 flex flex-col gap-4 items-center z-[1000]">
			<span className="w-28 text-center border-b text-white font-bold ">
				Hi! {user?.displayName?.split(" ")[0]}
			</span>
			<button
				className="w-28 h-10 font-normal border border-gray-400 rounded-md bg-black text-gray-400  hover:bg-red-600 hover:text-white active:bg-red-950"
				onClick={handleSignOut}
			>
				Logout
			</button>
			<button
				className={
					gptSearch
						? "w-28 h-10 font-normal border border-gray-400 rounded-md bg-black text-gray-400  hover:bg-purple-600 hover:text-white active:bg-red-950"
						: "w-28 h-10 font-normal border border-gray-400 rounded-md bg-black text-gray-400  hover:bg-teal-600 hover:text-white active:bg-teal-950"
				}
				onClick={handleGptSearchPage}
			>
				{gptSearch ? "Home Page" : "Gpt Search"}
			</button>
			{gptSearch && (
				<select
					className="w-28 bg-black text-gray-400 border rounded-md border-gray-400 py-2 text-center cursor-pointer outline-none"
					onChange={handleConfigLang}
					value={configLang}
				>
					{LANGUAGE_CODE.map((lang) => (
						<option key={lang.name} value={lang.code}>
							{lang.name}
						</option>
					))}
				</select>
			)}
		</div>
	);
};
export default HeaderHide;
