import React, { useEffect, useState } from "react";
import Card from "../src/Component/Card"

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://json-api.uz/api/project/malumotla/product/");

        if (!response.ok) {
          throw new Error("Ma'lumotni yuklab bo‘lmadi");
        }

        const data = await response.json();
        console.log(data.data);
        

        setUsers(data.data);
      } catch (err) {
        console.error("Xatolik:", err);
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);

  if (error) {
    return <p>Xatolik: {error}</p>;
  }
  return (
    <div>
      <Card data={users}/>
    </div>
  )
}
export default App
