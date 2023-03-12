import { BrowserRouter } from 'react-router-dom';
import Categories from './components/Categories';
import Nav from './components/Nav';
import Search from './components/Search';
import Pages from './Pages/Pages';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
