import './App.css';
import Article from './Article/Article';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Article></Article>
    </div>
  );
}

export default App;
