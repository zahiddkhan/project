import React from 'react'
import { BsFillBagFill } from "react-icons/bs";
import data from "../assets/Dp/Dp"

const Card = () => {
  return (
    <section className="cards" >
{
      data.map(({img,title,star,prevPrice,reviews,newPrice}) =>(
        <section className="card" >
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
      ))
    }

  </section>
  )
}

export default Card;