import { MdClearAll } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { PiBowlFoodFill } from "react-icons/pi";
import { GiNoodles } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { FaBurger } from "react-icons/fa6";

const CategoriesAssets = [
    {
        id: 1,
        categoryName: "All",
        name: <h1 className="sm:text-base text-xs sm:block hidden font-medium text-center group-hover:text-white text-gray-600">All</h1>,
        icon: <MdClearAll className="sm:w-8 w-6 sm:h-8 h-6 text-green-500 group-hover:text-white"/>
    },
    {
        id: 2,
        categoryName: "Breakfast",
        name: <h1 className="sm:text-base text-xs sm:block hidden font-medium text-center group-hover:text-white text-gray-600">Breakfast</h1>,
        icon: <MdFreeBreakfast className="sm:w-8 w-6 sm:h-8 h-6 text-green-500 group-hover:text-white"/>
    },
    {
        id: 3,
        categoryName: "Soup",
        name: <h1 className="sm:text-base text-xs sm:block hidden font-medium text-center group-hover:text-white text-gray-600">Soup</h1>,
        icon: <TbSoupFilled className="sm:w-8 w-6 sm:h-8 h-6 text-green-500 group-hover:text-white"/>
    },
    {
        id: 4,
        categoryName: "Rice",
        name: <h1 className="sm:text-base text-xs sm:block hidden font-medium text-center group-hover:text-white text-gray-600">Rice</h1>,
        icon: <PiBowlFoodFill className="sm:w-8 w-6 sm:h-8 h-6 text-green-500 group-hover:text-white"/>
    },
    {
        id: 5,
        categoryName: "Noodle",
        name: <h1 className="sm:text-base text-xs sm:block hidden font-medium text-center group-hover:text-white text-gray-600">Noodle</h1>,
        icon: <GiNoodles className="sm:w-8 w-6 sm:h-8 h-6 text-green-500 group-hover:text-white"/>
    },
    {
        id: 6,
        categoryName: "Pizza",
        name: <h1 className="sm:text-base text-xs sm:block hidden font-medium text-center group-hover:text-white text-gray-600">Pizza</h1>,
        icon: <FaPizzaSlice className="sm:w-8 w-6 sm:h-8 h-6 text-green-500 group-hover:text-white"/>
    },
    {
        id: 7,
        categoryName: "Burger",
        name: <h1 className="sm:text-base text-xs sm:block hidden font-medium text-center group-hover:text-white text-gray-600">Burger</h1>,
        icon: <FaBurger className="sm:w-8 w-6 sm:h-8 h-6 text-green-500 group-hover:text-white"/>
    },
]

export default CategoriesAssets;