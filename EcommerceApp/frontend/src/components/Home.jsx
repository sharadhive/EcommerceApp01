import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import Card from './Card.jsx';
import Footer from './Footer';
import './css/Home.css';
import { useGetAllProductsQuery } from '../features/productsApi';


function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  return (
    <div>
       <Navbar />
      <Slider />
      <div className='home-container'>
        {isLoading ? (
          <p>Loading</p>
        ) : error ? (
          <p>An error occurred: {error.data}</p>
        ) : (
          <>
            <h2>New arrivals</h2>
            <div className='products'>
              {data?.map(product => (
                <Card key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>

    
      <Footer />
    </div>
  );
}

export default Home;
