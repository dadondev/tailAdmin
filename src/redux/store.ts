import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebar.slice";
import cardsSlice from "./cards.slice";

const store = configureStore({
    reducer:{
        sidebar:sidebarSlice,
        cards:cardsSlice
    }
})

export default store