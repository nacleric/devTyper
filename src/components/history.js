import React, { useState, useEffect } from "react";

//function History() {
//  const [list, setList] = useState([]);
//  useEffect(() => {
//    for (let i = 0; i < localStorage.length; i++) {
//      let obj = {
//        title: localStorage.key(i),
//        url: localStorage.getItem(localStorage.key(i))
//      };
//      setList([...list, obj])
//    }
//  },[])
//
//  return (
//    <div>
//      <h1> History </h1>
//      {list.map(item => (
//        <a target="_blank" className="article-link" href={item.url}>
//          {item.title}
//        </a>
//      ))}
//    </div>
//  );
//}
function History() {
  const list = [];
  renderHistory = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let obj = {
        title: localStorage.key(i),
        url: localStorage.getItem(localStorage.key(i))
      };
    }
  };

  return (
    <div>
      <h1> History </h1>
      {list.map(item => (
        <a target="_blank" className="article-link" href={item.url}>
          {item.title}
        </a>
      ))}
    </div>
  );
}

export default History;
