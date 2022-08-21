import React from 'react'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
// import Side from '../components/Side'
import Footer from '../components/Footer'


const Home = () => {
  return (
   <>
    <div className="flex w-full justify-between">
 
      <Sidebar/>
      <Main/>
      {/* <Side/> */}
    </div>
     <Footer/>
   </>
   
  )
}

export default Home