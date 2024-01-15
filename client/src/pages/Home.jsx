import React from 'react';
import Landing from '../components/Landing';

const Home = () => {
  return (
    <div className='flex flex-col'>
        <Landing />
        <div className='flex flex-col px-20'>
        <span>Hi</span>
        <span>Hi</span>
        <span>Hi</span>
        </div>
    </div>
  )
}

export default Home