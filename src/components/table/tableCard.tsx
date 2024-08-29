/** @format */
import { useEffect } from "react";
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import Row from "./row";
import { cardI } from "../cards/card";
import { getDatas } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { giveAllDatas } from "../../redux/cards.slice";
import FilterCol from "../filter/filterCol";

const TableCard = () => {
	const dispatch = useDispatch();

	const { currentPagesCards, searchCards, searchText } = useSelector(
		(state: {
			cards: {
				currentPagesCards: cardI[];
				searchCards: cardI[];
				searchText: string;
			};
		}) => state.cards
	);
	useEffect(() => {
		getDatas().then((e) => {
			dispatch(giveAllDatas(e));
		});
	}, []);

	return (
		<Table className='w-[1000px] sm:w-[1200px] lg:w-full'>
			<TableHeader>
				<TableRow>
					<TableHead className='w-[150px]'>Image</TableHead>
					<TableHead className='w-[130px] flex items-center'>
						<FilterCol
							name='ID'
							src='id'
						/>
					</TableHead>
					<TableHead>
						<FilterCol
							name='Sarlavha'
							src='title'
						/>
					</TableHead>
					<TableHead className='truncate'>
						<FilterCol
							name='Izoh'
							src='description'
						/>
					</TableHead>
					<TableHead>
						<FilterCol
							name='Narxi'
							src='price'
						/>
					</TableHead>
					<TableHead>
						<FilterCol
							name='Kategoriya'
							src='name'
						/>
					</TableHead>
					<TableHead className='text-right'>Harakatlar</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{searchText.length ?
					searchCards.length ?
						searchCards.map((e) => (
							<Row
								{...e}
								key={e.id}
							/>
						))
					:	<></>
				: currentPagesCards ?
					currentPagesCards.map((e) => (
						<Row
							{...e}
							key={e.id}
						/>
					))
				:	""}
			</TableBody>
			{searchCards.length === 0 && searchText.length !== 0 && (
				<div className='flex justify-center min-w-full'>
					<div className='grid gap-3 mt-5 mx-auto'>
						<img
							src='/search.svg'
							className='max-w-[300px] mx-auto'
							alt='nothin search'
						/>
						<h1 className='text-2xl text-center font-medium'>Not Found</h1>
					</div>
				</div>
			)}
		</Table>
	);
};

export default TableCard;
