/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	modalT: "",
	open: false,
	product: {},
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		preferModal(state, { payload }) {
			state.modalT = payload.type;
			state.product = payload.product;
			state.open = true;
		},
		closeModal(state) {
			state.open = false;
		},
	},
});

export default modalSlice.reducer;

export const { preferModal, closeModal } = modalSlice.actions;
