import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/customer/HomePage'
import './assets/css/style.css'
import Invoice from './pages/customer/Invoice'
import Product from './pages/customer/Product'
import Dashboard from './pages/admin/Dashboard'
import ProductDashboard from './pages/admin/Product'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="/invoice" element={<Invoice/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/dashboard/product" element={<ProductDashboard/>}/>
        </Routes>
      </Router>
    </div>
  )
}