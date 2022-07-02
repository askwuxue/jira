import { IListProps } from "../type/interface";

export const List = ({ list, users }: IListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
        {list.map((project) => (
          <tr key={project.personId}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </thead>
    </table>
  );
};
