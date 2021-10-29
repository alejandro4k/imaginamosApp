import { IUiActions, Types } from "../types/types";

export const setDarkMode = (isActive:boolean):IUiActions=>({
    type:Types.setDarkMode,
    payload:isActive
})