import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import Nanve from './components/Nanve';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Nitrogen from'./components/Nitrogen';
import Potassium from './components/Potassium';
import Potato from './components/Potato';
import Peas from './components/Peas';
import Carrot from './components/Carrot';
import Bringle from './components/Bringle';
import Cabbage from './components/Cabbage';
import Corn from './components/Corn';
import Beetroot from './components/Beetroot';
import Tomato from './components/Tomato';
import Garlic from './components/Garlic';
import Onion from './components/Onion';
import Lemon from './components/Lemon';
import Radish from './components/Radish';
import Pumpkin from './components/Pumpkin';
import Mango from './components/Mango';
import Banana from './components/Banana';
import kiwi from './components/Kiwi';
import Grapes from './components/Grapes';
import Papaya from './components/Papaya';
import Dragonfruit from './components/Dragonfruit';
import Cherry from './components/Cherry';
import Orange from './components/Orange';
import Watermelon from './components/Watermelon';
import Apple from './components/Apple';
import Buy from './components/Buy';
import NitrogenInhibitor from './components/NitrogenInhibitor';
import Phorprus from './components/Phorprus';
import Calcium from './components/Calcium';
import Payment from './components/Payment';


import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Kiwi from './components/Kiwi';


function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<><Nanve/><Home/><Footer/></>
  },
  {
    path:"/about",
    element:<><Nanve/><Aboutus/><Footer/></>
  },
  {
    path:"/contact",
    element:<><Nanve/><Contact/><Footer/></>
  },
  {
    path:"/nitrogen",
    element:<><Nanve/><Nitrogen/><Footer/></>
  },
  {
    path:"/potassium",
    element:<><Nanve/><Potassium/><Footer/></>
  },
  {
    path:"/potato",
    element:<><Nanve/><Potato/><Footer/></>
  },
  {
    path:"/peas",
    element:<><Nanve/><Peas/><Footer/></>
  },
  {
    path:"/carrot",
    element:<><Nanve/><Carrot/><Footer/></>
  },
  {
    path:"/corn",
    element:<><Nanve/><Corn/><Footer/></>
  },
  {
    path:"/cabbage",
    element:<><Nanve/><Cabbage/><Footer/></>
  },
  {
    path:"/bringle",
    element:<><Nanve/><Bringle/><Footer/></>
  },
  {
    path:"/beetroot",
    element:<><Nanve/><Beetroot/><Footer/></>
  },
  {
    path:"/tomato",
    element:<><Nanve/><Tomato/><Footer/></>
  },
  {
    path:"/garlic",
    element:<><Nanve/><Garlic/><Footer/></>
  },
  {
    path:"/onion",
    element:<><Nanve/><Onion/><Footer/></>
  },
  {
    path:"/lemon",
    element:<><Nanve/><Lemon/><Footer/></>
  },
  {
    path:"/radish",
    element:<><Nanve/><Radish/><Footer/></>
  },
  {
    path:"/pumpkin",
    element:<><Nanve/><Pumpkin/><Footer/></>
  },
  {
    path:"/apple",
    element:<><Nanve/><Apple/><Footer/></>
  },
  {
    path:"/banana",
    element:<><Nanve/><Banana/><Footer/></>
  },
  {
    path:"/watermelon",
    element:<><Nanve/><Watermelon/><Footer/></>
  },
  {
    path:"/mango",
    element:<><Nanve/><Mango/><Footer/></>
  },
  {
    path:"/oranges",
    element:<><Nanve/><Orange/><Footer/></>
  },
  {
    path:"/kiwi",
    element:<><Nanve/><kiwi/><Footer/></>
  },
  {
    path:"/grapes",
    element:<><Nanve/><Grapes/><Footer/></>
  },
  {
    path:"/papaya",
    element:<><Nanve/><Papaya/><Footer/></>
  },
  {
    path:"/cherry",
    element:<><Nanve/><Cherry/><Footer/></>
  },
  {
    path:"/dragonfruit",
    element:<><Nanve/><Dragonfruit/><Footer/></>
  },
  {
    path:"/buy",
    element:<><Nanve/><Buy/><Footer/></>
  },
  {
    path:"/nitrogenin",
    element:<><Nanve/><NitrogenInhibitor/><Footer/></>
  },
  {
    path:"/phorpus",
    element:<><Nanve/><Phorprus/><Footer/></>
  },
  {
    path:"/calcium",
    element:<><Nanve/><Calcium/><Footer/></>
  },
  {
    path:"/payment",
    element:<><Nanve/><Payment/><Footer/></>
  }
])



  return (
    <>
    
<RouterProvider router={router}/>
    

    </>
  );
}

export default App;
