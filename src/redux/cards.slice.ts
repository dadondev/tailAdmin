import { createSlice } from "@reduxjs/toolkit";
import sortArray from "sort-array"
import { cardI } from "../components/cards/card";

const initialState = {
    cards:[],
    currentPagesCards:[],
    filter:"all", 
    slice:10,
    skip:0,
    searchCards:[],
    searchText:""
}

const cardsSlice = createSlice({
    name:"cards",
    initialState,
    reducers:{
        giveAllDatas(state,{payload}){
            state.cards = payload
            state.currentPagesCards = payload.slice(0, 10)
            state.currentPagesCards = sortArray(state.currentPagesCards, {by:"category", order:"desc"})
             if(payload === "cost"){
                state.currentPagesCards = sortArray(state.currentPagesCards, {
                    by:"price",
                    order:"desc"
                })
            }else if(payload === "category"){
                  state.currentPagesCards = sortArray(state.currentPagesCards, {
                    by:"category",
                    order:"desc"
                })
            }
        },
        preferCurrentPageDatas(state, {payload = 'right'}){
           if(payload === "right"){
             state.currentPagesCards = state.cards.slice(state.skip, state.skip + state.slice)
           state.skip += state.slice
           }else{
             state.currentPagesCards = state.cards.slice(state.skip - state.slice, state.skip)
            state.skip -= state.slice
           }
            if(payload === "cost"){
                state.currentPagesCards = sortArray(state.currentPagesCards, {
                    by:"price",
                    order:"desc"
                })
            }else if(payload === "category"){
                  state.currentPagesCards = sortArray(state.currentPagesCards, {
                    by:"category",
                    order:"desc"
                })
            }
        },
        changeSlice:(state, {payload})=>{
            if(payload > state.slice){
                        state.slice = payload
                    state.currentPagesCards = state.cards.slice(state.skip, state.slice+state.skip)
            }else{
            state.slice = payload
            state.currentPagesCards = state.cards.slice(state.slice-state.skip,state.skip )
            }
        },
        changeFilter(state, {payload}){
            if(payload === state.filter) return
            if(payload === "cost"){
                state.currentPagesCards = sortArray(state.currentPagesCards, {
                    by:"price",
                    order:"desc"
                })
            }else if(payload === "category"){
                  state.currentPagesCards = sortArray(state.currentPagesCards, {
                    by:"category",
                    order:"desc"
                })
            }else{
                state.filter = "all"
            }

        },
        search(state,{payload = ""}){
            const text = payload + ""
            if(state.cards.length >0) state.searchCards = state.cards.filter((e:cardI)=>e.title.slice(0, text.length).toLowerCase() === text.toLowerCase())
            state.searchText = payload
        },
        clearST(state){
            state.searchText = ""
        }
    }
})
export default cardsSlice.reducer
export const {giveAllDatas,preferCurrentPageDatas, changeSlice, changeFilter, search, clearST}= cardsSlice.actions