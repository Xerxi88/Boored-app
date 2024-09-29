import { Dispatch, SetStateAction } from "react";

export type Activity={
    activity:string;
}

export interface Generate{
    handleGenerate:()=>void
}

export interface FiltersProps {
    filter: string;
    setFilter: Dispatch<SetStateAction<string>>;
  }