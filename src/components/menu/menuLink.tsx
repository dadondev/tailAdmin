/** @format */
import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";
import { Badge } from "../ui/badge";

const MenuLink = ({
	children,
	to,
	icon,
	badge,
}: {
	children: ReactNode;
	to: string;
	icon: string;
	badge?: string;
}) => {
	return (
		<Link
			to={to}
			className='hover:no-underline hover:bg-white/5 px-4 py-3 rounded-sm flex justify-between'>
			<div className='flex justify-normal items-center gap-2'>
				<img
					src={icon}
					alt='menu-icon'
				/>
				<span className='text-base text-menuBtnColor font-medium'>
					{children}
				</span>
			</div>
			{badge && (
				<Badge
					variant={"default"}
					className='bg-proBadge text-white rounded-sm px-2 text-[12px] font-medium leading-none'>
					{badge}
				</Badge>
			)}
		</Link>
	);
};

export default MenuLink;
