import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TypeDispatch, TypeState } from "../store/store";

export const useAppDispatch=()=>useDispatch<TypeDispatch>() // подсказывает параметры и типы для экшена
export const useAppSelector: TypedUseSelectorHook<TypeState> = useSelector // подсказывает тип state