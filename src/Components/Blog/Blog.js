import React from 'react'
import {useState} from 'react'



const Blog = () => {
  const [state,setState] = useState();
  
  return (
    <div className='text-center'>
        <h1 className='text-xl bg-yellow-100 text-white'>Companys Blog</h1>
        <p>Gone are the days of juggling multiple tabs for flights, hotels, and itinerary planning. With a travel app, you can:

Search and book flights, accommodations, and car rentals in one place.
Get personalized suggestions based on your preferences and budget.
Save your itineraries and sync them with your calendar for easy access.
Popular apps like Google Travel or Skyscanner take the hassle out of planning, leaving you with more time to focus on the fun parts of your trip.

</p>
<p>
Ever felt lost in a new city? Travel apps with offline maps and real-time navigation features are lifesavers. Apps like Google Maps and Maps.me ensure you never miss a landmark, local eatery, or hidden gem.

Save maps offline to navigate without worrying about roaming charges.
Find nearby attractions, restaurants, or ATMs with ease.
Get walking, driving, or public transport directions tailored to your location.git 
</p>
    </div>
  )
}

export default Blog