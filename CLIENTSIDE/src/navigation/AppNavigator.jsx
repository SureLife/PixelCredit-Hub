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
import ForgotPassword from "../pages/ForgotPassword"
import Verification from "../components/Verification";
import AdminPanel from "../pages/AdminPanel";
import UploadImage from "../pages/UploadImage";

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
        <Route path="/verify/:token" element={<Verification />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/results" element={<SearchResult />} />
        <Route path="/images/upload" element={<UploadImage />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/members/:memberName" element={<Member />} />
        <Route path="/users/:userid" element={<UserProfile/>} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="adminpanel" element={<AdminPanel/>}/>

      </Routes>
    </>
  );
}

export default AppNavigator;
