import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { actions, addUser, collections, data, locationCenter } from '../types/typescript';

interface IS {
    searchText: string
    collection: collections
    listData_temp: data[]
    listData_per: data[]
    searchButtonClicked: number
    actionType: actions | undefined
    close_modal: string | undefined
    location_center: locationCenter | undefined
    name: string | undefined,
    lastName: string | undefined,
    meli: string | undefined,
}
const initialState: IS = {
    searchText: '',
    collection: 'all',
    listData_temp: [],
    listData_per: [],
    searchButtonClicked: 0,
    actionType: undefined,
    close_modal: undefined,
    location_center: undefined,
    name: undefined,
    lastName: undefined,
    meli: undefined,
}

export const general = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setSearchText: (state: IS, action: PayloadAction<string>) => {
            state.searchText = action.payload
        },
        setCollection: (state: IS, action: PayloadAction<collections>) => {
            state.collection = action.payload
        },
        setListData_temp: (state: IS, action: PayloadAction<data[]>) => {
            state.listData_temp = action.payload
        },
        setListData_both: (state: IS, action: PayloadAction<data[]>) => {
            state.listData_temp = action.payload
            state.listData_per = action.payload
        },
        setActionType: (state: IS, action: PayloadAction<actions>) => {
            state.actionType = action.payload
        },
        SearchButtonClicked: (state: IS) => {
            state.searchButtonClicked = Math.random()
        },
        CloseModal: (state: IS, action: PayloadAction<string>) => {
            state.close_modal = action.payload
        },
        SetLocationCenter: (state: IS, action: PayloadAction<locationCenter | undefined>) => {
            state.location_center = action.payload
        },
        SetSaveValues: (state: IS, action: PayloadAction<string[]>) => {
            state.name = action.payload[0]
            state.lastName = action.payload[1]
            state.meli = action.payload[2]
        },
    }
})

export const { setSearchText, setCollection, setListData_temp, setListData_both, SearchButtonClicked, setActionType, CloseModal, SetLocationCenter,SetSaveValues } = general.actions
export default general.reducer