import { MdClearAll } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { RiDrinksFill } from "react-icons/ri";
import { GiNoodles } from "react-icons/gi";
import { FaPizzaSlice } from "react-icons/fa6";
import { FaBurger } from "react-icons/fa6";

const CategoriesAssets = [
    {
        id: 1,
        name: <h1 className="text-base font-medium text-center">All</h1>,
        icon: <MdClearAll className="w-8 h-8"/>
    },
    {
        id: 2,
        name: <h1 className="text-base font-medium text-center">Breakfast</h1>,
        icon: <MdFreeBreakfast className="w-8 h-8"/>
    },
    {
        id: 3,
        name: <h1 className="text-base font-medium text-center">Soup</h1>,
        icon: <TbSoupFilled className="w-8 h-8"/>
    },
    {
        id: 4,
        name: <h1 className="text-base font-medium text-center">Drink</h1>,
        icon: <RiDrinksFill className="w-8 h-8"/>
    },
    {
        id: 5,
        name: <h1 className="text-base font-medium text-center">Noodle</h1>,
        icon: <GiNoodles className="w-8 h-8"/>
    },
    {
        id: 6,
        name: <h1 className="text-base font-medium text-center">Pizza</h1>,
        icon: <FaPizzaSlice className="w-8 h-8"/>
    },
    {
        id: 7,
        name: <h1 className="text-base font-medium text-center">Burger</h1>,
        icon: <FaBurger className="w-8 h-8"/>
    },
]

export default CategoriesAssets;