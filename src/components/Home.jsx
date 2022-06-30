import React from 'react'
import { Link } from 'react-router-dom'
import { List, UserPlus } from "react-feather"

const Home = ({personas}) => {
  return (
    <div className='home wrapper'>

      {personas.length ? 
      <>
         <h2 className='title'>Welcome to the system</h2>
         <p className='subtitle'>Let's observe your current citizens!</p>
         <Link to="/people">
            <button className='button position'>
                <List/>
            </button>
        </Link>

      </>
      :
      <>
        <h2 className='title'>Welcome to the system</h2>
        <p className='subtitle'>Start by adding some people!</p>
        <Link to="/form">
            <button className='button position'>
                <UserPlus/>
            </button>
        </Link>
      </>
    }


    {/*     <h2 className='title'>Welcome to my voting system</h2>
        <p className='subtitle'>Start by adding some voters!</p>
         */}
     

    </div>
  )
}

export default Home