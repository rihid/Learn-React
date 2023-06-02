import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Feed() {

    const [selectCategory, setSelectCategory] = useState('Coding')
    return(
        <div className="flex flex-col">
            <div className="bg-slate-200 py-2">
                <Sidebar selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
            </div>
            <div className="bg-gray-50">
                Video
            </div>
        </div>
    )
}