import { Link } from "react-router-dom";
import Intro from "./Intro";
import Facilities from "./Facilities";
import Timeline from "./Timeline";
import Investors from "./Investors";

const BodyComp = () => {
    return (
        <div className="bg-gray-900 text-white">
            <Intro />
            <div className="text-center pt-10">
                <Link to="/form">
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Apply Now
                        </span>
                    </button>
                </Link>
            </div>
            <Facilities />
            <Timeline />
            <Investors />
        </div>
    );
};
export default BodyComp;
