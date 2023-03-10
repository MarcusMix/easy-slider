import './App.css'

//framer motion
import { motion } from 'framer-motion'

//images
import images from './images'

//hooks
import { useEffect, useRef, useState } from 'react'

//icons
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'

function App() {
  
  const [width, setWidth] = useState<any>()
  
  const carousel = useRef<any>()
  
  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])


  const [containerKey, setContainerKey] = useState(1)
  
  const [leftConstraint, setLeftConstraint] = useState<number>(0)

  //other solution of width problem

  // const handleLeftConstraint = useCallback(() => {
  //   const el = document.getElementById('id');
  //   if (el) {
  //     setLeftConstraint(el.scrollWidth - el.offsetWidth);
  //   }
  // }, ['id']);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setContainerKey((prev) => prev + 1);
  //     handleLeftConstraint();
  //   };
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [handleLeftConstraint]);

  return (
    <div className="App">
      <h1>A simple Carousel slider with React + TypeScript</h1>
      <motion.div 
        ref={carousel} 
        className='carousel' 
        key={containerKey}  
        id='id'>
          <motion.div 
            drag="x"  
            dragConstraints={{right: 0, left: -width}}
            className='inner-carousel'>
            {images.map((image) => {
              return (
                <motion.div className='item' key={image}>
                  <img src={image} alt="image" />
                </motion.div>
              )
            })}
          </motion.div>
      </motion.div>
      <h1> <AiOutlineDoubleLeft/> slider <AiOutlineDoubleRight /> </h1>
    </div>
  )
}

export default App
