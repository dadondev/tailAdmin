/** @format */

import { SizeIcon } from "@radix-ui/react-icons";
import { LuBuilding2 } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { IoStatsChartOutline } from "react-icons/io5";
import { Link } from "@tanstack/react-router";

const Sections = () => {
	return (
		<div className='flex flex-wrap gap-4 mt-5'>
			{sections.map((e, i) => {
				return (
					<Link
						to={"/" + e.url}
						className='flex border rounded-md py-3 px-4 gap-4 items-center max-w-[300px] w-full transition-all bg-gray-100/60  hover:bg-white'
						key={i}>
						<div className='w-14 h-14 rounded-full border flex justify-center items-center bg-slate-100 text-2xl'>
							{e.icon}
						</div>
						<p className='text-xl'>{e.name}</p>
					</Link>
				);
			})}
		</div>
	);
};

export default Sections;

const sections = [
	{ name: "Tashkilotlar", icon: <LuBuilding2 />, url: "/organizations" },
	{ name: "Kategoriyalar", icon: <TbCategory />, url: "/categories" },
	{ name: "O'lchov birligi", icon: <SizeIcon />, url: "/measures" },
	{ name: "Mahsulotlar", icon: <AiOutlineProduct />, url: "/products" },
	{ name: "Yuk xatlari", icon: <CiMail />, url: "/mails" },
	{ name: "Kirim qilish", icon: <IoStatsChartOutline />, url: "/doincomes" },
];
