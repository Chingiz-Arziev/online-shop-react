function Header(props) {
  return(
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo512.png" alt=""/>
        <div className="headerInfo">
          <h3 className="company-name">React Project</h3>
          <p className="opacity-5">online shop</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li onClick={props.openCart} className="mr-30 cu-p">
          <img src="/img/cart.svg" alt="cart"/>
          <span>1205 $</span>
        </li>
        <li>
          <img src="/img/Union.svg" alt="profile"/>
        </li>
      </ul>
    </header>
  )
}

export default Header;