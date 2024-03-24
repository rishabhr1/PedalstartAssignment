import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between bg-black p-8">
            <div className="flex">
                <Link to="/">
                    <img
                        className="w-36"
                        src="https://join.pedalstart.com/src/2021/05/logo.png"
                        alt="comp-logo"
                    />
                </Link>
                <ul className="flex text-white">
                    <li className="px-3">Home</li>
                    <li className="px-3">Startup</li>
                    <li className="px-3">Investor</li>
                    <li className="px-3">Cohorts</li>
                    <li className="px-3">Market Research</li>
                </ul>
            </div>
            <div className="flex items-center">
                <div className="flex text-black bg-white rounded-lg pl-2">
                    <div className="pr-2">Call Us: +91 9560346002</div>
                    <div className="text-white bg-gray-950 rounded-lg px-2">
                        Apply Now
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
