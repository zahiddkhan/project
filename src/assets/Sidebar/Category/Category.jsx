import React from 'react'
import "./Category.css"

const Category = () => {
  return (
    <>
        <div className='ml'>
      <h2 className="sidebar-title">Category</h2>
    
     <label className="sidebar-label-container">
          <input  type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <label className="sidebar-label-container">
          <input  type="radio" value="" name="test" />
          <span className="checkmark"></span>Sneakers
        </label>
        <label className="sidebar-label-container">
          <input  type="radio" value="" name="test" />
          <span className="checkmark"></span>Flats
        </label>
        <label className="sidebar-label-container">
          <input  type="radio" value="" name="test" />
          <span className="checkmark"></span>Sandals
        </label>
        <label className="sidebar-label-container">
          <input  type="radio" value="" name="test" />
          <span className="checkmark"></span>Heels
        </label>
        </div>
    </>
  )
}

export default Category