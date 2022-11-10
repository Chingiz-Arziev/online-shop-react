import Card from './components/Card'
import Header from './components/Header'
import Cart from './components/Cart'

function App() {
  return (
    <div className="wrapper clear">
    <Cart/>
    <Header/>

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>ВСЕ ТОВАРЫ</h1>
          <div className="search-block">
            <img src="/img/Group.png" alt="Search"/>
            <input type="text" placeholder="Search"/>
          </div>
        </div>

        <div className="d-flex">
          <Card/>
      </div>

    </div>
  );
}

export default App;
