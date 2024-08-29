/** @format */

import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";
import { RxDashboard } from "react-icons/rx";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineWarehouse } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import MenuLink from "./menuLink";
import { AvatarMenu } from "../avatar-menu/component";
import MobSidebar from "./mobSidebar";
import { BsShop } from "react-icons/bs";

const Sidebar = () => {
	const { open } = useSelector(
		(state: { sidebar: { open: boolean } }) => state.sidebar
	);
	return (
		<div className='w-full h-full sticky top-0 left-0 z-10'>
			<MobSidebar />
			<div
				data-open={open}
				className='h-full w-full bg-menu group hidden sm:flex flex-col transition-all group-data-[open=true]:items-center max-h-dvh sticky top-0 group-data-[open=true]:max-w-[250px]'>
				<Link
					className='flex justify-center pt-10'
					to='/'>
					<img
						src={open ? "/logo.svg" : "/single-logo.svg"}
						alt='logo'
					/>
				</Link>
				<div className='mt-10 group-data-[open=true]:px-6 transition-all px-2 flex flex-col flex-1 justify-between pb-5'>
					<nav>
						<p className='text-darkText-200 text-sm font-medium transition-all block group-data-[open=true]:block group-data-[open=true]:block'>
							Menu
						</p>

						<div className='grid pt-6'>
							{menus.map((e, i) => (
								<MenuLink
									{...e}
									key={i}
								/>
							))}
						</div>
					</nav>
					<div className='flex gap-5 items-center'>
						<AvatarMenu />
						<span className='group-data-[open=true]:block hidden transition-all text-white'>
							Profil
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

const menus = [
	{
		name: "dashboard",
		icon: <RxDashboard />,
		url: "/",
	},
	{
		name: "Sotuv bolimi",
		icon: <RiMoneyDollarCircleLine />,
		url: "/sale",
	},
	{
		name: "magazin",
		icon: <BsShop />,
		url: "/store",
	},
	{
		name: "omborxona",
		icon: <MdOutlineWarehouse />,
		url: "/warehouse",
	},
	{
		name: "Sozlamalar",
		icon: <IoSettingsOutline />,
		url: "/settings",
	},
];
