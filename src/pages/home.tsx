/** @format */

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/button";
import { useDispatch } from "react-redux";
import { toggleSheet } from "../redux/sidebar.slice";
import CloseSidebar from "../components/sidebar/closeSidebar";
import Table from "../components/table/table";

const Home = () => {
	const dispatch = useDispatch();

	return (
		<div className='h-full px-5 pt-3'>
			<div className='flex gap-4 items-end'>
				<CloseSidebar />
				<h1 className='text-2xl '>Dashboard</h1>
			</div>
			<Table />

			<Button
				onClick={() => dispatch(toggleSheet())}
				className='text-xl fixed bottom-7 right-7 sm:hidden'>
				<HamburgerMenuIcon />
			</Button>
		</div>
	);
};

export default Home;
