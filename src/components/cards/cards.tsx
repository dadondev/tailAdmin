/** @format */

import { useEffect, useState } from "react";
import SingleCard, { cardI } from "./card";
import { getDatas } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { giveAllDatas } from "../../redux/cards.slice";
import PaginationCard from "./paginationCard";
import CardSkeleton from "./cardSkeleton";

const Cards = () => {
	const [datas, setDatas] = useState<cardI[]>([]);
	const { currentPagesCards, filter, searchCards, searchText } = useSelector(
		(state: {
			cards: {
				currentPagesCards: cardI[];
				filter: "all" | "cost" | "category";
				searchCards: cardI[];
				searchText: string;
			};
		}) => state.cards
	);
	const dispatch = useDispatch();
	useEffect(() => {
		getDatas().then((e) => {
			dispatch(giveAllDatas(e));
		});
	}, []);
	useEffect(() => {
		if (filter === "all") {
			setDatas(currentPagesCards);
		}
	}, [currentPagesCards, filter]);

	return (
		<div className='pt-5 md:hidden'>
			<div className='flex justify-between flex-col [&>*]:min-w-full sm:[&>*]:min-w-[auto] items-center gap-2 sm:gap-0 sm:flex-row mb-5'></div>
			<div className='flex flex-wrap justify-center gap-10 mb-5'>
				{searchCards.length > 0 || currentPagesCards.length > 0 ?
					searchText !== "" ?
						searchCards.length > 0 ?
							searchCards.map((e: cardI) => (
								<SingleCard
									{...e}
									key={e.id}
								/>
							))
						:	<div>
								<img
									src='/search.svg'
									className='max-w-[300px] mx-auto'
									alt='nothin search'
								/>
								<h1 className='text-2xl text-center font-medium'>Not Found</h1>
							</div>

					:	datas &&
						datas.map((e: cardI) => (
							<SingleCard
								{...e}
								key={e.id}
							/>
						))

				:	Array(10)
						.fill(0)
						.map((_, i) => <CardSkeleton key={i} />)
				}
			</div>

			<PaginationCard />
		</div>
	);
};

export default Cards;
