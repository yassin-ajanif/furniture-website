import { useState } from 'react'
import './App.css'
import { Header,Category,PopularProducts,SpecialPackage,Benefits,Testimonials,Newsletter,Footer } from './index'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import OwnCreation from './containers/Own Creation/Own-Creation'
import YourCard from './components/yourCard/YourCard'
import Navabar from './containers/navbar/Navabar'
import AboutPage from './components/AboutPage/AboutPage'
import TermsAndConditionsPage from './components/TermsConditions/Terms&Conditions'
import ContactUs from './components/contactUS/contactUs'

function App() {

  const [count, setCount] = useState(0)

  const Main = () => {

    return (

    <>
    <Header/>
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
   
  <Navabar/>
   
  <Routes>

   < Route index element = { <Main/> } />
   < Route path='/shoppingCard' element= { <YourCard/> } />
   < Route path='/aboutPage'    element= { <AboutPage/> } />
   < Route path='/termsAndConditions'  element= { <TermsAndConditionsPage/> } />
   < Route path='/contactUs'  element= { <ContactUs/> } />

   

   
   

  </Routes>

  <Footer/>

  </BrowserRouter>

   </div>

  )
}

export default App
