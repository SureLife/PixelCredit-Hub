import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import ShoppingCart from "../pages/ShoppingCart";
import SearchResult from "../pages/SearchResult";
import UserProfile from "../pages/UserProfile";
import Member from "../pages/Member";

function AppNavigator() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/results" element={<SearchResult />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/about/:memberName" element={<Member />} />
      </Routes>
    </>
  );
}

export default AppNavigator;
