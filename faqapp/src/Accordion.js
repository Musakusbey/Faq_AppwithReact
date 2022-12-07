import React from 'react' 
    
const Accordion = ({ title, active, setActive }) => {
  return (
    <div className='accordion'> 
      <div className='accordionHeading'> 
        <div className='container'> 
          <p> {title} </p>
          <span onClick={() => setActive(title)}> CLİCK ME </span>
        </div> 
      </div>      
      <div className={(active===title ? "show" : "" ) + "accordionContent"}>
        <div className='container'>
          <p id="prg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu dui ut mauris laoreet vulputate eget consequat lectus. Suspendisse potenti. Sed lacinia volutpat ipsum, id varius magna ornare ac. Sed dignissim placerat est bibendum ultrices. Praesent eget quam vitae purus varius aliquam at ac neque. Donec non porttitor diam, vitae iaculis leo. Donec aliquet turpis leo, ut venenatis lectus dapibus eget. In quis euismod mauris. Aenean porttitor sapien aliquam quam vulputate, id rhoncus tortor elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sodales tristique pharetra. Aliquam tincidunt augue id neque mollis, nec tempor turpis hendrerit.</p>
        </div>
      </div>
    </div>
  ) 
}

export default Accordion
