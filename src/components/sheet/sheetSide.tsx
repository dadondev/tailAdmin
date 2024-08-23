/** @format */

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Sidebar from "../sidebar/sidebar";

const SheetSide = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: (a: boolean) => void;
}) => {
	return (
		<Sheet
			open={open}
			onOpenChange={setOpen}>
			<SheetTrigger asChild></SheetTrigger>
			<SheetContent className='bg-menu overflow-auto text-white'>
				<Sidebar sheet></Sidebar>
			</SheetContent>
		</Sheet>
	);
};

export default SheetSide;
