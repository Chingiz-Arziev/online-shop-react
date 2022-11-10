function Card() {
  return (
    <div className="card">
      <div className="favourite">
        <img src="/img/heart-unliked.svg" alt=""/>
      </div>
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
  )
}

export default Card;