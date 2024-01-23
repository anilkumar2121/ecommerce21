import React from 'react';
import "./Popular.css";
import data from "../Assets/AllProduct";
import Item from '../item/Item';

const Popular = () => {
  return (
    <div>
        <div className='popular'>
            <h1>Popular in Women</h1>
            <hr />
            <div className='popular-item'>
                {data.map((item,i) =>{
                    return(<Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)
                })}
            </div>
        </div>

    </div>
  )
}

export default Popular