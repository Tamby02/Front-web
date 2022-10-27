
import './App.css';
// import Welcome from './components/Welcome'
import {useRoutes} from "react-router-dom";
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import Footer from './components/Footer';
import Layout from './components/Layout';
import Search from './pages/Search';
import Result from './pages/Result';

function App() {
  let element= useRoutes([
    {
      path: "",
      element: <Layout/>,
      children: [
        {
          path: "/home",
          element: <Welcome/>
        }
        ,
        {
          path:"/enter",
          element: <Search/>
        },
        {
          path:"/result",
          element: <Result/>
        }
      ]
    }
])
 return element;
}

export default App;
