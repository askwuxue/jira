import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./searchPanel";
import { cleanObject } from "../../utils";
import qs from "qs";

const API = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: 1,
  });

  // 列表
  const [list, setList] = useState([]);

  // 用户
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${API}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, [param]);

  useEffect(() => {
    fetch(`${API}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [param]);

  return (
    <>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </>
  );
};
