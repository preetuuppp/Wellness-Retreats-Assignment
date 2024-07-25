import React, { useEffect, useState } from "react";
import axios from "axios";
const Data = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className= "grid gap-4 place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
      {data.map((ele) => {
        return (
          <div className="hover:scale-125 transition delay-500 duration-200 ease-in-out cursor-pointer border-2 border-gray-400 text-center align-center" key={ele.id}>
            <div>
              <img className="w-48 h-48" src={ele.image} alt="image" />
            </div>
            <div>
              <h1>{ele.title}</h1>
              <h2>{ele.price}</h2>
              <p>{ele.rating.rate}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
