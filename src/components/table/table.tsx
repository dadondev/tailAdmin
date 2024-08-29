/** @format */

import PaginationCard from "../cards/paginationCard";
import Filter from "../filter/filter";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import TableCard from "./tableCard";

const Table = () => {
	return (
		<div className='block mt-10 max-w-full overflow-x-hidden'>
			<Filter />
			<ScrollArea className='w-full h-full'>
				<TableCard />
				<ScrollBar orientation='horizontal' />
			</ScrollArea>
			<PaginationCard />
		</div>
	);
};

export default Table;
