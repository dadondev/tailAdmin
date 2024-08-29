/** @format */

import { createSlice } from "@reduxjs/toolkit";
import sortArray from "sort-array";
import { cardI } from "../components/cards/card";

export interface initialSI {
	cards: cardI[];
	currentPagesCards: cardI[];
	filter: "category" | "price" | "title" | "all" | "description";
	slice: number;
	skip: number;
	searchCards: cardI[];
	searchText: string;
}

const initialState: initialSI = {
	cards: [],
	currentPagesCards: [],
	filter: "all",
	slice: 10,
	skip: 0,
	searchCards: [],
	searchText: "",
};

const cardsSlice = createSlice({
	name: "cards",
	initialState,
	reducers: {
		giveAllDatas(state, { payload }) {
			state.cards = payload;
			state.currentPagesCards = payload.slice(0, 10);
		},
		preferCurrentPageDatas(state, { payload = "right" }) {
			if (payload === "right") {
				state.currentPagesCards = state.cards.slice(
					state.skip,
					state.skip + state.slice
				);
				state.skip += state.slice;
			} else {
				state.currentPagesCards = state.cards.slice(
					state.skip - state.slice,
					state.skip
				);
				state.skip -= state.slice;
			}
		},
		changeSlice: (state, { payload }) => {
			if (payload > state.slice) {
				state.slice = payload;
				state.currentPagesCards = state.cards.slice(
					state.skip,
					state.slice + state.skip
				);
			} else {
				state.slice = payload;
				state.currentPagesCards = state.cards.slice(
					state.slice - state.skip,
					state.skip
				);
			}
		},
		search(state, { payload = "" }) {
			const text = payload + "";
			if (state.cards.length > 0)
				state.searchCards = state.cards.filter(
					(e: cardI) =>
						e.title.slice(0, text.length).toLowerCase() === text.toLowerCase()
				);
			state.searchText = payload;
		},
		clearST(state) {
			state.searchText = "";
		},
		giveSingleCard(state, { payload }) {
			const card: cardI = payload;
			state.cards = [];
			state.cards.push(card as never);
		},
		deleteProductByID(state, { payload }) {
			const id = payload;
			state.cards = state.cards.filter((card: cardI) => card.id !== id);
			state.currentPagesCards = state.currentPagesCards.filter(
				(card: cardI) => card.id !== id
			);
		},
		updateProduct(state, { payload }) {
			const data: cardI = payload;
			state.cards = state.cards.map((e: cardI) =>
				e.id === data.id ? data : e
			);
			state.currentPagesCards = state.currentPagesCards.map((e: cardI) =>
				e.id === data.id ? data : e
			);
		},
		filterBy(state, { payload }) {
			state.filter = payload;
			if (payload === "name") {
				state.cards = sortArray(state.cards, {
					by: payload,
					computed: {
						name: (row) => row.category.name,
					},
				});
				state.currentPagesCards = sortArray(state.currentPagesCards, {
					by: payload,
					computed: {
						name: (row) => row.category.name,
					},
				});
			} else {
				state.cards = sortArray(state.cards, {
					by: payload,
				});
				state.currentPagesCards = sortArray(state.currentPagesCards, {
					by: payload,
				});
			}
		},
	},
});
export default cardsSlice.reducer;
export const {
	giveAllDatas,
	preferCurrentPageDatas,
	changeSlice,
	search,
	clearST,
	deleteProductByID,
	updateProduct,
	filterBy,
} = cardsSlice.actions;
