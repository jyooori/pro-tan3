import {Header, Footer} from './Common';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Counter from './pages/Counter';
import Input from './pages/Input';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="App">
      <Header />{/* 로고와 네비게이션 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    {/* footer component */}
      <Footer />
    </div>
  );
}

export default App;
