import { useState } from 'react'
import './App.css'
import { Header,Category,PopularProducts,SpecialPackage,Benefits,Testimonials,Newsletter,Footer } from './index'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import OwnCreation from './containers/Own Creation/Own-Creation'
import YourCard from './components/YourCard'

function App() {

  const [count, setCount] = useState(0)

  const Main = () => {

    return (

    <>
   
    <Category/>
    <PopularProducts/>
    <SpecialPackage/>
    <OwnCreation/>
    <Benefits/>
    <Testimonials/>
    <Newsletter/>
    </>

    )

  } 



  return (
       
   <div className="app">
 
  <BrowserRouter>
   
  <Header/>
   
  <Routes>

   < Route index element = { <Main/> } />

   < Route path='/shoppingCard' element= { <YourCard/> } />

  </Routes>

  <Footer/>

  </BrowserRouter>

   </div>

  )
}

export default App
