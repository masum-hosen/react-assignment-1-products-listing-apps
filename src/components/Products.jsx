import React from 'react';

const Products = (props) => {
    const { title, image, price, rate, desc } = props;
    console.log(props);
    return (
      <div key={props.key}>
        <article className="product">
          <img src={image} alt="" />
          <div className="product__details">
            <h4 className="product__title">{title}</h4>
            <p className="product__price">Price: $ {price}</p>
            <p className="product__rating">Rating: {rate.rate}</p>
            <p className="product__desc">Description: {desc}</p>
            <button className="product__btn btn">Add to cart</button>
          </div>
        </article>
      </div>
    );
};

export default Products;