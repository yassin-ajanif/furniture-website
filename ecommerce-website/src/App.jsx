import { useState } from 'react'
import './App.css'
import { Header,Category,PopularProducts,SpecialPackage,Benefits,Testimonials,Newsletter,Footer,
  Bedrooms, DinningRooms,LivingRooms,MeetingRooms,RoomKitchens,Workspaces,AllProducts } from './index'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import OwnCreation from './containers/Own Creation/Own-Creation'
import YourCard from './components/yourCard/YourCard'
import Navabar from './containers/navbar/Navabar'
import AboutPage from './components/AboutPage/AboutPage'
import TermsAndConditionsPage from './components/TermsConditions/Terms&Conditions'
import ContactUs from './components/contactUS/contactUs'

function App() {


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
   
   
  <Routes>

   < Route index element = { <Main/> } />
   < Route path='/shoppingCard' element= { <div><Navabar/><YourCard/></div> } />
   < Route path='/aboutPage'    element= { <div><Navabar/><AboutPage/></div> } />
   < Route path='/termsAndConditions'  element= { <div><Navabar/><TermsAndConditionsPage/></div> } />
   < Route path='/contactUs'  element= { <div><Navabar/><ContactUs/></div> } />

   < Route path='/Bedrooms'  element= { <div><Navabar/><Bedrooms/></div> } />
   < Route path='/DinningRooms'  element= { <div><Navabar/><DinningRooms/></div> } />
   < Route path='/LivingRooms'  element= { <div><Navabar/><LivingRooms/></div> } />
   < Route path='/MeetingRooms'  element= { <div><Navabar/><MeetingRooms/></div> } />
   < Route path='/RoomKitchens'  element= { <div><Navabar/><RoomKitchens/></div> } />
   < Route path='/Workspaces'  element= { <div><Navabar/><Workspaces/></div> } />

   < Route path='/allProducts'  element= {<div><Navabar/><AllProducts/></div> } />

   < Route path='*'  element= {<div><Navabar/>Page not found</div>} />



  </Routes>

  <Footer/>

  </BrowserRouter>

   </div>

  )
}

export default App
