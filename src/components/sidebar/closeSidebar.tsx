/** @format */

import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/sidebar.slice";
import { Button } from "../ui/button";
import { TbArrowBarRight } from "react-icons/tb";

const CloseSidebar = () => {
	const dispatch = useDispatch();
	const { open } = useSelector(
		(state: { sidebar: { open: boolean } }) => state.sidebar
	);
	const handleClick = () => {
		dispatch(toggleSidebar());
	};
	return (
		<Button
			variant={"ghost"}
			data-open={open}
			className='transition-all data-[open=true]:-rotate-180 text-slate-400'
			type='button'
			onClick={handleClick}>
			<TbArrowBarRight size={24} />
		</Button>
	);
};

export default CloseSidebar;
