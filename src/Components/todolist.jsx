import React from "react";
import { useState } from "react";
function TodoList({ list }) {

    const [filterText, setFilterText] = useState('');

    const filtered = list.filter((item) => 
       Object.keys(item).some((key) => 
        item[key].toString().toLowerCase().includes(filterText.toLowerCase())
      
    ));




 
   // console.log(filtered);

  return (

    <div>
          <input 
            type="text" placeholder="Arama"
           value={filterText}
            onChange={(e) => setFilterText(e.target.value)} />
      <ul>
        {filtered.map((item, index) => (
          <li key={index}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
