import { Route, Routes } from 'react-router-dom';
import ListCard from './components/ListCard';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Details from './components/Details';


function App() {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route
            path='/'
            element={
              <>
                <Slider/>
                <ListCard/>              
              </>
            }/>
        <Route path='/details/:productId' element={<Details/>}/>
      </Routes>

    </div>
  );
}

export default App;
