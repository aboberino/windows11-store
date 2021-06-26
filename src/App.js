import './App.css';
import Header from './component/Header/Header';
import SideBar from './component/SideBar/SideBar';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* main */}
      <div className="main">
        {/* side bar */}
        <SideBar />
        {/* content */}
        <Home />
      </div>
    </div>
  );
}

export default App;
