import Home from "./pages/Home";
import Product from "./pages/Product";
import { Route, Routes } from 'react-router-dom'
import Edit from "./pages/Edit";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/product' element={<Product />}/>
      <Route path='/edit' element={<Edit />}/>
    </Routes>
    </>
  );
}

export default App;
