/** @format */
import { FaSort } from "react-icons/fa";

const FilterBtn = ({ onClick }: { onClick: () => void }) => {
	return (
		<button onClick={onClick}>
			<FaSort size={20} />
		</button>
	);
};

export default FilterBtn;
