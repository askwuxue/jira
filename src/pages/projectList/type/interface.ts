export interface IUsers {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

export interface IProject {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

export interface IParam {
  name: string;
  personId: number;
}

export type SetParam = (param: any) => void;

export interface ISearchPanelProps {
  users: IUsers[];
  param: IParam;
  setParam: SetParam;
}

export interface IListProps {
  list: IProject[];
  users: IUsers[];
}
