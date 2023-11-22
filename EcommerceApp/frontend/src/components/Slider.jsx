import React, { useEffect } from 'react';
import './css/Slider.css';

function Slider() {
  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.getElementById('carouselExampleRide');
      if (carousel) {
        const currentSlide = carousel.querySelector('.carousel-item.active');
        const nextSlide = currentSlide.nextElementSibling || carousel.querySelector('.carousel-item:first-child');

        if (nextSlide) {
          currentSlide.classList.remove('active');
          nextSlide.classList.add('active');
        }
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ margin: '20px', borderRadius: '10px', overflow: 'hidden' }}>
      <div id="carouselExampleRide" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/900x700/?smartphones"
              className="d-block w-100"
              alt="..."
              width="900"
              height="500"
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?tshirt"
              className="d-block w-100"
              alt="..."
              width="900"
              height="500"
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?television"
              className="d-block w-100"
              alt="..."
              width="900"
              height="500"
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?shoe"
              className="d-block w-100"
              alt="..."
              width="900"
              height="500"
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?laptop"
              className="d-block w-100"
              alt="..."
              width="900"
              height="500"
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?bags"
              className="d-block w-100"
              alt="..."
              width="900"
              height="500"
              style={{ borderRadius: '10px' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/900x700/?toys"
              className="d-block w-100"
              alt="..."
              width="900"
              height="500"
              style={{ borderRadius: '10px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
