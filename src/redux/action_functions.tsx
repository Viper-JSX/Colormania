import { ActionType, ChangeColorModePayload, ChangeTablessortCriteriaPayload } from "../typescript/types";
import { CHANGE_COLOR_MODE, CHANGE_TABLES_SEARCH_TERM, CHANGE_TABLES_SORT_FILTER, RUN_TABLES_FILTER } from "./action_types";

//export function changeColorMode(payload: ChangeColorModePayload):ActionType{
//    return({ type: CHANGE_COLOR_MODE, payload: payload })
//}
//
//export function changeTablessortCriteria(payload: ChangeTablessortCriteriaPayload):ActionType{
//    return { type: CHANGE_TABLES_SORT_FILTER, payload: payload };
//}
//
//export function changeTablesSearchTerm(payload: string){
//    return { type: CHANGE_TABLES_SEARCH_TERM, payload: payload };
//}
//
//export function runTablesFilter():ActionType{
//    return { type: RUN_TABLES_FILTER };
//}