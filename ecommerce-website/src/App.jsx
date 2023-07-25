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
   
  <Navabar/>
   
  <Routes>

   < Route index element = { <Main/> } />
   < Route path='/shoppingCard' element= { <YourCard/> } />
   < Route path='/aboutPage'    element= { <AboutPage/> } />
   < Route path='/termsAndConditions'  element= { <TermsAndConditionsPage/> } />
   < Route path='/contactUs'  element= { <ContactUs/> } />

   < Route path='/Bedrooms'  element= { <Bedrooms/> } />
   < Route path='/DinningRooms'  element= { <DinningRooms/> } />
   < Route path='/LivingRooms'  element= { <LivingRooms/> } />
   < Route path='/MeetingRooms'  element= { <MeetingRooms/> } />
   < Route path='/RoomKitchens'  element= { <RoomKitchens/> } />
   < Route path='/Workspaces'  element= { <Workspaces/> } />

   < Route path='/allProducts'  element= {<AllProducts/> } />

   < Route path='*'  element= {<div>Page not found</div>} />



  </Routes>

  <Footer/>

  </BrowserRouter>

   </div>

  )
}

export default App
