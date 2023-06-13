  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import './index.css'
  import { BrowserRouter, Routes, Route } from 'react-router-dom'
  import Home from './Home'
  import Contact from './Contact'
  import Beer from './Beer'
  import Layout from './components/Layout'

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/beer/:id" element={<Beer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
  