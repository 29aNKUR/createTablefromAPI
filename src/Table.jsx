import React, { useEffect, useState } from "react";

const URL = "https://reqres.in/api/users";
const Table = () => {
  const [tableData, setTableData] = useState("");

  const fetchData = async () => {
    const data = await fetch(URL);
    const json = await data.json();
    // console.log(json.data);
    //localCompare two strings
    const sortedData = json.data.sort((a,b) => a.first_name.localeCompare(b.first_name));
    setTableData(sortedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {tableData &&
          tableData.map((item) => (
            <tr key={item.id}>
              <td>{`${item.first_name} ${item.last_name}`}</td>
              <td>{item.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
