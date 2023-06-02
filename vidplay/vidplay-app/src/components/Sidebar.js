import React from 'react'
import { categories } from '../utils/utility'

export default function Sidebar({seleectCategory, setSelectCategory}) {
  return (
    <>
        {categories.map(category => {
            return <button>{category.name}</button>
        })}
    </>
  )
}
