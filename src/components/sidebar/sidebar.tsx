/** @format */
import Logo from "../logo/logo";
import Menu from "../menu/menu";

const Sidebar = ({ sheet }: { sheet?: boolean }) => {
	return (
		<div
			className={
				sheet ? "grid " : (
					"lg:grid hidden " +
					"max-h-full py-10 px-6 bg-sidebar  grid-rows-[auto_1fr] gap-[43px]"
				)
			}>
			<Logo />
			<Menu />
		</div>
	);
};

export default Sidebar;
