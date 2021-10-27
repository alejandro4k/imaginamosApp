import { IUiActions, IUiState, Types } from "../types/types"

const initialState:IUiState = {
    darkmode:false
}
export const uiReducer = (state=initialState,action:IUiActions):IUiState=>{
    const {type,payload} = action;
    switch (type) {
        case Types.setDarkMode:
            return{
                darkmode:!state.darkmode
            }
    
        default: return state
    }

}