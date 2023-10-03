// routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProductDetails from './components/Products/ProductDetails.jsx';
import ProductPages from './pages/ProductPages';
import AboutPages from './pages/AboutPages';
import NewsPages from './pages/NewsPages';
import ContactPages from './pages/ContactPages';
import ViewCartPages from './components/ShoppingCart/ViewCartPages';
import CheckoutPages from './components/ShoppingCart/CheckoutPages';
import ChiliProduct from './components/Products/CategoryProductPages/ChiliProduct';
import GingerProduct from './components/Products/CategoryProductPages/GingerProduct';
import TurmericProduct from './components/Products/CategoryProductPages/TurmericProduct';
import LemongrassProduct from './components/Products/CategoryProductPages/LemongrassProduct';
import GarlicProduct from './components/Products/CategoryProductPages/GarlicProduct';
import RetailProducts from './components/Products/CategoryProductPages/RetailProducts';
import CassiaCinnamonProduct from './components/Products/CategoryProductPages/CassiaCinnamonProduct';
import StarAniseProduct from './components/Products/CategoryProductPages/StarAniseProduct';
import GalleryPages from './pages/GalleryPages';
import NewsPagesDetails from './components/News/NewsPagesDetails';

function AppRoutes() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='/view-cart' element={<ViewCartPages />} />
        <Route path='/checkout' element={<CheckoutPages />} />
        <Route path='/gallery' element={<GalleryPages />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/product" element={<ProductPages />} />
        <Route path="/news" element={<NewsPages />} />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/chili" element={<ChiliProduct />} />
        <Route path="/ginger" element={<GingerProduct />} />
        <Route path="/turmeric" element={<TurmericProduct />} />
        <Route path="/lemongrass" element={<LemongrassProduct />} />
        <Route path="/garlic" element={<GarlicProduct />} />
        <Route path="/retail-products" element={<RetailProducts />} />
        <Route path="/cassia/-cinnamon" element={<CassiaCinnamonProduct />} />
        <Route path="/star-anise" element={<StarAniseProduct />} />
        <Route path="/contact" element={<ContactPages />} />
        <Route path="/blog/:id" element={<NewsPagesDetails />} />
      </Routes>
    </div>

  );
}

export default AppRoutes;
