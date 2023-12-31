// import React from 'react'
import "./style.css"
import Menu from './menuApi.js';
import { useState } from "react";
import Card from "./Card.jsx";
import Navbar from "./Navbar.jsx";


const uniqeList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})), "All",]
//  console.log(uniqeList);

const Resturents = () => {
    const [menuData, setMenuData] = useState(Menu)
    const [menuList, setMeenuList] = useState(uniqeList)
    const filterItem = (categery) => {
        if (categery === "All") {
            setMenuData(Menu)
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === categery;

        });
        setMenuData(updatedList);

    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <Card menuData={menuData} />


        </>
    )
}

export default Resturents
