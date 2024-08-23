/** @format */

import { Input } from "../ui/input";
import { UserDropdown } from "./userDropdown";

const Header = () => {
	return (
		<div className='w-full py-3 border-b px-8 flex justify-between'>
			<form action=''>
				<div className='flex items-center'>
					<img
						src='/search.png'
						alt='seach-icon'
					/>
					<Input
						className='max-w-[300px] w-full border-none shadow-none focus:!ring-0'
						placeholder='Search product...'
					/>
				</div>
			</form>
			<div>
				<UserDropdown />
			</div>
		</div>
	);
};

export default Header;
