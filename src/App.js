import './App.css';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Home from './pages/Home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddSlider from './adminpanel/slider/AddSlider';
import UpdateSlider from './adminpanel/slider/UpdateSlider';
import SliderDetail from './adminpanel/slider/SliderDetail';
import Admins from './adminpanel/Admins';
import AddPhotos from './adminpanel/photos/AddPhotos';
import PhotosDetail from './adminpanel/photos/PhotosDetail';
import UpdatePhotos from './adminpanel/photos/UpdatePhotos';
import AddProducts from './adminpanel/products/AddProducts';
import ProductDetail from './adminpanel/products/ProductDetail';
import UpdateProducts from './adminpanel/products/UpdateProducts';

function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} exact/>
      <Route path='/sliderDetail' element={<SliderDetail/>} exact/>
      <Route path='/addSlider' element={<AddSlider/>}/>
      <Route path='/updateSlider/:id' element={<UpdateSlider/>} exact/>
      <Route path='/admin' element={<Admins/>}/>
      <Route path='/addphotos' element={<AddPhotos/>} exact/>
      <Route path='/photosDetail' element={<PhotosDetail/>}/>
      <Route path='/updatephotos/:id' element={<UpdatePhotos/>}/>
      <Route path='/addproducts' element={<AddProducts/>}/>
      <Route path='/productdetail' element={<ProductDetail/>}/>
      <Route path='/updateproducts/:id' element={<UpdateProducts/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
