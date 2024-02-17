import { GiBookshelf } from "react-icons/gi";
import { HiOutlineHome } from "react-icons/hi";
import { BsPersonArmsUp } from "react-icons/bs";
import React, { ReactElement } from "react";

export interface NavLink {
    name:string;
    icon:ReactElement;
}

export const navLinks:NavLink[] = [
    {name:'Home', icon: <HiOutlineHome/>}, 
    {name:'About', icon: <BsPersonArmsUp/>}, 
    {name:'Projects', icon: <GiBookshelf/>},
];
    