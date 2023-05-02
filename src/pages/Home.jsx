import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from "../features/addItem/productSlice";
const Home = () => {
  // const count = useSelector((state) => state.additem.value)
  // const dispatch = useDispatch()
const dispatch = useDispatch()
const items = useSelector((state) => state)
console.log(items)
  useEffect(() => {
    dispatch(fetchProducts())
    }, [])
  
    return (
    <div className="flex justify-center items-center h-screen">
      <button  className="bg-[steelblue] text-white px-4 py-2 rounded">
       Add product
      </button>
    </div>
  );
};

export default Home;
