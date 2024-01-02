import React from "react";
import { Link } from "react-router-dom";

const MenuBarbar = () => {
    return(
        <>
        <div className="row bg-warning bg-opacity-25">
            <div className=" col-12 ">
               <Link to='/about' className="max-3" >About</Link>
               <Link to='/services' className="max-3" >Services</Link>
               <Link to='/blog' className="max-3" >Blog</Link>
               <Link to='/contact' className="max-3"> Contact</Link>
               <Link to='/ipltable' className="max-3">IPL IplTable API</Link>
               <Link to='/regform' className="max-3" >Registration Form</Link>
            </div>
        </div>
        </>
    )
}
export default MenuBarbar;