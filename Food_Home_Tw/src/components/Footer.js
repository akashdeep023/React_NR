const Footer = () => {
    return (
        <div className="text-white h-80 flex justify-around items-start py-10 mt-7 bg-black">
            <div>
                <h3 className="text-xl font-bold underline min-w-24 mb-2">Food Home</h3>
                <p className="text-gray-300 hover:underline pb-1">© 2024 Jack</p>
                <p className="text-gray-300 hover:underline pb-1">Pvt. Ltd</p>
            </div>
            <div className="social">
                <h3 className="text-xl font-bold underline min-w-24 mb-2">Social Links</h3>
                <div>
                    <i></i>
                    <p className="text-gray-300 hover:underline pb-1"><a href="https://www.linkedin.com/in/akashdeep023/" target="_blank">LinkedIn</a></p>
                </div>
                <div>
                    <i></i>
                    <p className="text-gray-300 hover:underline pb-1"><a href="https://github.com/akashdeep023" target="_blank">GitHub</a></p>
                </div>
                <div>
                    <i></i>
                    <p className="text-gray-300 hover:underline pb-1"><a href="https://www.instagram.com/mr_akashdeep_/" target="_blank">Instagram</a></p>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold underline min-w-24 mb-2">Company</h3>
                <p className="text-gray-300 hover:underline pb-1">Privacy Policy</p>
                <p className="text-gray-300 hover:underline pb-1">Terms & Conditions</p>
                <p className="text-gray-300 hover:underline pb-1">Help</p>
                <p className="text-gray-300 hover:underline pb-1">Contact Us</p>
                <p className="text-gray-300 hover:underline pb-1">About</p>
                <p className="text-gray-300 hover:underline pb-1">Careers</p>
            </div>
        </div>
    )
}
export default Footer;