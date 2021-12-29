import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Login from './components/Login';



function App() {
  const user=null;
  return (
    <div className="app">
      {
        !user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Feed />
              <Rightbar />
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
