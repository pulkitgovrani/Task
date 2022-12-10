import React from 'react'
import img from '../assets/picoriginal.jpg';
import './Left.css';
const Left = () => {
  return (
    <div className='main-class'>
    
        <div style={{paddingTop:'20px'}}>
            <img src={img}/>
         <p>  Pulkit Govrani
        <br/>    Website Developer
        </p> 
        </div>

        <div style={{width:'50%'}}>
            <p>
                About Me
                <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.

            </p>

        </div>

        <div>
            <p>
                Interior Design 
            </p>
            <div className='progress'>
                <div className='progress-bar' ></div>
            </div>
            <p>
                Interior Design 
            </p>
            <div className='progress'>
                <div className='progress-bar' ></div>
            </div>
            <p>
                Interior Design 
            </p>
            <div className='progress'>
                <div className='progress-bar' ></div>
            </div>
        </div>
        <div>
            <p>
                Contact Details
            <br/>
            9414312948
            
            </p>


        </div>

    </div>
  )
}

export default Left