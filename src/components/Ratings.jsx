import React, { useState } from 'react';

function Ratings() {
  const [rating, setRating] = useState(0);

  return (
    <div className=''>
      
      <p>Rate: {rating}</p>
<div className='flex justify-center items-center gap-2'>
      <button className='bg-blue-500' onClick={() => setRating(rating + 1)}>Increase Rating</button>
      <button className='bg-blue-500' onClick={() => setRating(rating - 1)}>Decrease Rating</button>
    </div>
    </div>
  );
}

export default Ratings;
