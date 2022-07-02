import { useEffect, useState } from "react";
import { List } from "./list";
import { SearchPanel } from "./searchPanel";
import { cleanObject } from "../../utils";
import { useOnceMount, useDebounce } from "../../hooks";
import qs from "qs";

const API = process.env.REACT_APP_API_URL;

export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: 1,
  });

  // debounce 返回值
  const debounceParam = useDebounce(param, 500);

  // 列表
  const [list, setList] = useState([]);

  // 用户
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch(`${API}/users`).then(async (response) => {
  //     if (response.ok) {
  //       setUsers(await response.json());
  //     }
  //   });
  // }, []);
  useOnceMount(() => {
    fetch(`${API}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });

  useEffect(() => {
    fetch(`${API}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [debounceParam]);

  return (
    <>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </>
  );
};
