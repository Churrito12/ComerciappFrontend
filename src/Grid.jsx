import { DataGrid, Column } from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import "@inovua/reactdatagrid-community";
import ReactDataGrid from "@inovua/reactdatagrid-community";

const Grid = () => {
  const columns = [
    {
      name: "name",
      header: "Name",

      minWidth: 50,
      defaultFlex: 2,
    },
    {
      name: "age",
      header: "Age",

      maxWidth: 1000,
      defaultFlex: 1,
    },
    {
      name: "precio",
      header: "Precio",

      maxWidth: 1000,
      defaultFlex: 1,
    },
  ];

  const gridStyle = { minHeight: 200 };

  const dataSource = [
    { id: 1, name: "John McQueen", age: 35, precio: 200 },
    { id: 2, name: "Mary Stones", age: 25, precio: 200 },
    { id: 3, name: "Robert Fil", age: 27, precio: 200 },
  ];

  return (
    <div>
      <ReactDataGrid
        idProperty="id"
        columns={columns}
        dataSource={dataSource}
        style={gridStyle}
      />
    </div>
  );
};
export default Grid;
