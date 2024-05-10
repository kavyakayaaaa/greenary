import React from 'react';
import './App.css';
import { Provider } from 'react-redux'; // Importing Provider
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import store from './redux/store'; // Assuming you have a Redux store configured
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Picture';
import Contact from './components/Contact';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CustomerLogin from './components/Customer/CustomerLogin';
import DeliveryLogin from './components/Delivery/DeliveryLogin';
import CustomerSignup from './components/Customer/CustomerSignup';
import DeliverySingup from './components/Delivery/Deliverysingup';
import BusinessmanDashboard from './components/Business/BusinessDashboad';
import DeliveryDashboard from './components/Delivery/DeliveryDashboard';
import FarmerDashboard from './components/Customer/CustomerDashboad';
import AddProduct from './components/Customer/AddProduct';
import Products from './components/Customer/Product';
import DeleteProduct from './components/Customer/DeleteProduct';
import Bmorders from './components/Business/Bmorders';
import Borders from './components/Business/Borders';
import BusinessLogin from './components/Business/BusinessLogin';
import Conversion from './components/Business/Conversion';
import Customerinventory from './components/Business/Customerinventory';
import FetchProduct from './components/Business/FetchProduct';
import Inventory from './components/Business/Inventory';
import CustomerOrder from './components/Business/CustomerOrder';
import Purchase from './components/Business/Purchase';
import Bhorders from './components/Business/OrderHistory';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/farmerlogin" element={<CustomerLogin />} />
        <Route exact path="/deliverylogin" element={<DeliveryLogin />} />
        <Route exact path="/farmersignup" element={<CustomerSignup />} />
        <Route exact path="/businesslogin" element={<BusinessLogin />} />
        <Route exact path="/delsingup" element={<DeliverySingup />} />
        <Route exact path="/bdashboard" element={<BusinessmanDashboard />} />
        <Route exact path="/fdashboard" element={<FarmerDashboard />} />
        <Route exact path="/ddashboard" element={<DeliveryDashboard />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/listproducts" element={<Products />} />
        <Route exact path="/removeproduct" element={<DeleteProduct />} />
        <Route exact path="/purchaseproducts" element={<Purchase />} />
        <Route exact path="/convertions" element={<Conversion />} />
        <Route exact path="/inventory" element={<Inventory />} />
        <Route exact path="/ci" element={<Customerinventory />} />
        <Route exact path="/orders" element={<CustomerOrder />} />
        <Route exact path="/borders" element={<Borders />} />
        <Route exact path="/bhorders" element={<Bhorders />} />
        <Route exact path="/bmorders" element={<Bmorders />} />
        <Route exact path="/iamadmin" element={<Bhorders />} />
        <Route exact path="/fetch" element={<FetchProduct />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </Provider>
  );
}

export default App;

