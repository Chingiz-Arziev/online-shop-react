function Cart() {
  return (
    <div style={{display: "none"}} className="overlay">
      <div className="cart-side">
        <h3 className="d-flex justify-between mb-30">
          CART
          <img className="remove-btn" src="/img/remove.svg" alt="remove"/>
        </h3>
        <div className="items">
          <div className="cart-item d-flex align-center mb-30 mr-10">
            <img className="mr-20" width={70} height={70} src="/img/1.png" alt="item"/>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки модель экзотический атлас </p>
              <b>463 $</b>
            </div>
            <img className="remove-btn" src="/img/remove.svg" alt="remove"/>
          </div>

          <div className="cart-item d-flex align-center mb-30 mr-10">
            <img className="mr-20" width={70} height={70} src="/img/2.png" alt="item"/>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские кроссовки модель экзотический атлас </p>
              <b>463 $</b>
            </div>
            <img className="remove-btn" src="/img/remove.svg" alt="remove"/>
          </div>
        </div>

        <div className="cart-total-block">
          <ul>
            <li>
              <span>Total price:</span>
              <div></div>
              <b>1345$</b>
            </li>
            <li>
              <span>Delivery</span>
              <div></div>
              <b>76$</b>
            </li>
          </ul>
          <button>Go To Offer</button>
        </div>

      </div>
    </div>
  )
}

export default Cart