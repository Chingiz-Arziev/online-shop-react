function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-cente p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo512.png" alt=""/>
          <div className="headerInfo">
            <h3 className="company-name">React Sneakers</h3>
            <p>Магазин</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30">
            <img src="/img/Group.svg" alt=""/>
            <span>1205 $</span>
          </li>
          <li>
            <img src="/img/Union.svg" alt=""/>
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1>ВСЕ ТОВАРЫ</h1>

        <div className="d-flex">
          <div className="card">
            <img width={133} height={112} src="/img/1.png" alt=""/>
            <h5>Мужские кроссовки модель экзотический атлас </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price: </span>
                <b>246 $</b>
              </div>
              <button className="button">
                <img src="/img/Group 91.svg" alt=""/>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/2.png" alt=""/>
            <h5>Мужские кроссовки модель экзотический атлас </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price: </span>
                <b>246 $</b>
              </div>
              <button className="button">
                <img src="/img/Group 91.svg" alt=""/>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/3.png" alt=""/>
            <h5>Мужские кроссовки модель экзотический атлас </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price: </span>
                <b>246 $</b>
              </div>
              <button className="button">
                <img src="/img/Group 91.svg" alt=""/>
              </button>
            </div>
          </div>

          <div className="card">
            <img width={133} height={112} src="/img/4.png" alt=""/>
            <h5>Мужские кроссовки модель экзотический атлас </h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>price: </span>
                <b>246 $</b>
              </div>
              <button className="button">
                <img src="/img/Group 91.svg" alt=""/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
