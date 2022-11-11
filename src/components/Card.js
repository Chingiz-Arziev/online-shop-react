import React from 'react'

function Card({addToFavorite, addToCart, title, price, image}) {

  const [isAdded, setAddedState] = React.useState(false)

  const changeBtnAdd = () => {
    addToCart({title, price, image})
    setAddedState(!isAdded)
  }

  return (
    <div className="card">
      <div className="favorite" onClick={addToFavorite}>
        <img src="/img/heart-unliked.svg" alt=""/>
      </div>
      <img width={133} height={112} src={image} alt="Add to cart"/>
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>price: </span>
          <b>{price} $</b>
        </div>
          <img className="plus" onClick={changeBtnAdd} src={isAdded ? "/img/done.svg" : "/img/plus.svg"} alt="Add to cart"/>
      </div>
    </div>
  )
}

export default Card;