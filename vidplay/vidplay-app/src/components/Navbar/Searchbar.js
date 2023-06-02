import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Searchbar() {
    return(
        <form className="relative">
            <input type="text" className="outline-none p-2 rounded-full text-sm border w-50 sm:w-80" />
            <button type="submit"><MagnifyingGlassIcon className="text-gray-400 bg-white h-6 absolute top-2 right-3" /></button>
        </form>
    )
}