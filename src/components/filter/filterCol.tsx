/** @format */

import { useDispatch, useSelector } from "react-redux";
import FilterBtn from "./btn";
import { filterBy } from "../../redux/cards.slice";

const FilterCol = ({ name, src }: { name: string; src: string }) => {
	const { filter } = useSelector(
		(state: { cards: { filter: string } }) => state.cards
	);
	const dispatch = useDispatch();
	function handleClick() {
		dispatch(filterBy(src));
	}
	return (
		<div
			data-open={filter === src}
			className='flex items-center gap-2 data-[open=true]:text-black transition-all'>
			{name} <FilterBtn onClick={handleClick} />
		</div>
	);
};

export default FilterCol;
