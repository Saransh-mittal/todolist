import React, { useState } from "react";
import ToDoList from "./ToDoList.jsx";
const App = () => {
  let [item, setItem] = useState();
  const [itemList, setList] = useState([]);
  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const onSubmit = () => {
    setList((preValue) => {
      return [...preValue, item];
    });
    setItem("");
  };
  const deleteItem = (id) =>{
    //console.log(id);
    setList((preValue)=>{
      return preValue.filter((arrEle,index)=>{
        return id!==index;
      })
    })
}
  return (
    <>
      <div className="min-h-screen grid place-items-center bg-sky-700">
        <div className="bg-gray-100 min-h-[70%] w-1/5 rounded-lg shadow-lg shadow-black ">
          <h1 className="text-white text-center text-3xl font-bold mt-3 bg-fuchsia-800 mb-6 shadow-md">
            ToDoList
          </h1>
          <div className="flex flex-row items-center justify-center mb-8">
            <input
              className="bg-gray-100 outline-0 w-full md:w-4/6 text-center p-1 mb-2 md:mb-8 border-b-4 border-b-fuchsia-800"
              type="text"
              placeholder="Add items"
              value={item}
              onChange={itemEvent}
            />
            <button
              onClick={onSubmit}
              className="flex pb-1 w-10 h-10 rounded-full bg-fuchsia-800 hover:bg-green-600 justify-center items-center ml-3 mb-8 text-white text-2xl"
            >
              +
            </button>
          </div>
          <ul className="text-fuchsia-800 text-lg font-serif ml-4">
            {/* <li>{item}</li> */}
            {itemList.map((itemVal,index) => {
              return <ToDoList 
              text={itemVal}
              key={index}
              id={index}
              onSelect={deleteItem} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
//shadow-[5px_5px_25px_-5px_rgba(0,0,0,0.5)]