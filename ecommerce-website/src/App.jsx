import { useState } from 'react'
import './App.css'
import { Header,Category,PopularProducts,SpecialPackage,Benefits,Testimonials,Newsletter,Footer } from './index'
import { BrowserRouter } from 'react-router-dom'
import OwnCreation from './containers/Own Creation/Own-Creation'

function App() {

  const [count, setCount] = useState(0)

  return (
       
   <div className="app">
 
  <BrowserRouter>
     <Header/>
     <Category/>
     <PopularProducts/>
     <SpecialPackage/>
     <OwnCreation/>
     <Benefits/>
     <Testimonials/>
     <Newsletter/>
  <Footer/>
 
    </BrowserRouter>

   </div>

  )
}

export default App
