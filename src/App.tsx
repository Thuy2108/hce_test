import "./styles.css";
// @ts-ignore
import Home from "./Home";
// @ts-ignore
import Layout from "./Layout";
// @ts-ignore
import Trang1 from "./Trang1";
// @ts-ignore
import Trang2 from "./Trang2";
import Chitietsanpham from "./Chitietsanpham";
import Listsanpham from "./Listsanpham";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  //return <Layout />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="trang2" element={<Trang2 />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />
          <Route path="listsanpham" element={<Listsanpham />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
