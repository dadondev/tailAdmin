/** @format */

import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Badge } from "../ui/badge";

const MenuItem = ({
	type,
	children,
	to,
}: {
	type: "pro" | "simple";
	children: ReactNode;
	to: string;
}) => {
	return (
		<Link
			aria-type={type}
			className='pl-[45px] pr-4 text-white aria-[type=pro]:text-darkColorSecondary text-base font-medium flex justify-between hover:bg-white/5 py-2 rounded-sm'
			to={to}>
			{children}
			{type === "pro" && (
				<Badge
					variant={"default"}
					className='bg-proBadge text-white rounded-sm px-2 text-[12px] font-medium leading-none'>
					Pro
				</Badge>
			)}
		</Link>
	);
};

export default MenuItem;
