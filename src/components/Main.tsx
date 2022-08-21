import React from 'react'
import Content from './Content'
import Navbar from './Navbar'

class Main extends React.Component {
  render(): React.ReactNode {
    
    return (
      <div className="flex pr-4  md:w-4/5 w-full flex-col gap-12 " style={{borderRight:".2px solid #6363637b"}}>
          <Navbar/>
          <Content/>
      </div>
    )
  }
}

export default Main