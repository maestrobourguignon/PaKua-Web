import { useEffect, useState } from 'react'
import { data } from '../../assets/carrusel/data';
import "./carousel.css";



export const Carousel = () => {
  // const listRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(data[0]);
  const [loaded, setLoaded] = useState(false);


  const nextImage = () => {
    setLoaded(false);
    setTimeout(() => {
      const condition = currentIndex < data.length-1;
      const nextIndex = condition ? currentIndex + 1 : 0;
      setCurrentIndex(nextIndex);
      setCurrentImage(data[nextIndex]);
    }, 700);
  }
  
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); 
    return () => clearInterval(interval); 
  }, [currentIndex]);
  

  
  return (
  <>
  {currentImage && (
  <a href={currentImage.link} className='carousel-container'>
    <img
      className={`img-carrusel ${loaded ? "loaded" : ""}`}
      src={currentImage.img}
      alt={currentImage.name || ''} 
      onLoad={() => setLoaded(true)}
    />
    
    {/* El texto va aquí, flotando sobre la imagen */}
    {currentImage.name && (
      <div className='image-caption'>
        {currentImage.name}
      </div>
    )}
  </a>
)}</>
  )
}