import Home from "./routes/Home/home.component";
import { Route, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <div>
        <h1> I am Navigation Bar</h1>
      </div>
      <Outlet />
    </div>
  );
};
const Shop = () => {
  return <h2> I am shop page </h2>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
