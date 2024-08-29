/** @format */

import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebar.slice";
import cardsSlice from "./cards.slice";
import modalSlice from "./model.slice";

const store = configureStore({
	reducer: {
		sidebar: sidebarSlice,
		cards: cardsSlice,
		modal: modalSlice,
		
	},
});

export default store;
