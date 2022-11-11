import React from "react";

import Card from './components/Card'
import Header from './components/Header'
import Cart from './components/Cart'

function App() {
  const [isThisCartOpen, setCartToOpen] = React.useState(false)
  const [getItems, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])

  React.useEffect(() => {
    fetch('https://636d631391576e19e327512d.mockapi.io/items')
      .then(res => {
        return res.json()
    }).then(json => {
      setItems(json)
    })
  }, [])

  const pushToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  const unshiftFromCart = (obj) => {
    console.log('reasd')
    cartItems.splice(obj.index, 1)
  }

  return (
    <div className="wrapper clear">
      {isThisCartOpen ? <Cart cartItems={cartItems} closeCart={() => {setCartToOpen(false)}}/> : null}
      <Header openCart={() => {setCartToOpen(true)}}/>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All Products</h1>
          <div className="search-block">
            <img src="/img/search.png" alt="Search"/>
            <input type="text" placeholder="Search"/>
          </div>
        </div>

        <div className="d-flex justify-between flex-wrap">
          {getItems.map(item => (
            <Card
              title={item.title}
              price={item.price}
              image={item.image}
              key={item.price}
              addToFavorite={() => {
                console.log('Товар добавлен в избранное')}}
              addToCart={(obj) => pushToCart(obj)}
              removeFromCart={(obj) => unshiftFromCart(obj)}
            />
          ))}
        </div>
      </div>

    </div>
  )
}
export default App
