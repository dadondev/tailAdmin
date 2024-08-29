/** @format */

import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Pagination } from "../ui/pagination";
import { useDispatch, useSelector } from "react-redux";
import { cardI } from "./card";
import { preferCurrentPageDatas } from "../../redux/cards.slice";

const PaginationCard = () => {
	const dispatch = useDispatch();
	const { skip, cards, searchCards, searchText } = useSelector(
		(state: {
			cards: {
				skip: number;
				slice: number;
				cards: cardI[];
				searchCards: cardI[];
				searchText: string;
				currentPagesCards: cardI[];
			};
		}) => state.cards
	);
	const disabled = searchCards.length === 0 && searchText !== "";
	function handleClick(type: "right" | "back") {
		if (type === "back") {
			dispatch(preferCurrentPageDatas("back"));
		} else {
			dispatch(preferCurrentPageDatas("right"));
		}
	}

	return (
		<Pagination className='flex gap-10 mt-5'>
			<Button
				onClick={() => handleClick("back")}
				disabled={skip === 0 || disabled}>
				<ArrowLeftIcon
					width={24}
					height={24}
				/>
			</Button>
			<Button
				onClick={() => handleClick("right")}
				disabled={cards.length <= skip || disabled}>
				<ArrowRightIcon
					width={24}
					height={24}
				/>
			</Button>
		</Pagination>
	);
};

export default PaginationCard;
