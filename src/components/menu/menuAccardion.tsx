/** @format */

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";
import MenuItem from "./menuItem";

const MenuAccardion = ({
	name,
	children,
	icon,
	active,
}: {
	name: string;
	icon: string;
	children: {
		type: "pro" | "simple";
		children: string;
		to: string;
	}[];
	active: boolean;
}) => {
	return (
		<Accordion
			type='multiple'
			className='w-full'>
			<AccordionItem
				value='item-1'
				className='border-none'>
				<AccordionTrigger
					aria-selected={active}
					className='hover:no-underline px-4 py-3 rounded-sm hover:bg-white/5 aria-selected:bg-menu aria-selected:hover:bg-menu'>
					<div className='flex justify-normal items-center gap-2'>
						<img
							src={icon}
							alt='menu-icon'
						/>
						<span className='text-base text-menuBtnColor font-medium'>
							{name}
						</span>
					</div>
				</AccordionTrigger>
				<AccordionContent className='pt-4 grid gap-2'>
					{children.map((e, i) => (
						<MenuItem
							{...e}
							key={i}
						/>
					))}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default MenuAccardion;
