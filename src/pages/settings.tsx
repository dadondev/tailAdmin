/** @format */

import Sections from "../components/settings/section";
import CloseSidebar from "../components/sidebar/closeSidebar";

const Settings = () => {
	return (
		<div className='h-full pt-5 pl-3'>
			<div className='flex gap-5 items-end'>
				<CloseSidebar />
				<h1 className='text-2xl'>Sozlamalar</h1>
			</div>
			<div>
				<Sections />
			</div>
		</div>
	);
};

export default Settings;
