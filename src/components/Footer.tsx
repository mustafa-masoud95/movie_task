import React from "react";




class Footer extends React.Component  {


  render(): React.ReactNode {
    
    return (
      <div className="fixed bottom-0 bg-dark text-white flex w-full justify-between items-center py-3 px-4 z-1000 shadow-xl mt-3">
        <p className="flex gap-2 w-full justify-end ">
          <span>Made By <span className="text-primary">Mustafa Masoud</span> </span>
          <span className="hidden md:block"> &copy; 21/8/2022</span>
        </p>
  
      </div>
    )
  }
};

export default Footer;
