import React from 'react'
import { FaStar } from "react-icons/fa";
import user1 from "/public/user1.jpg"
import user2 from "/public/user2.jpg"   
import user3 from "/public/mathCart.jpg"

function UsersRating() {
  return (
    <div>

<div className="img-box flex ml-46">
<div className='flex mx-4'>
        <img className='w-7 h-7 rounded-full border-1' src={user1} alt="user image" />
<img className='w-7 h-7 rounded-full border-1' src={user2} alt="user image" />
<img className='w-7 h-7 rounded-full border-1' src={user3} alt="user image" />
</div>

<div className="stars">
<span className='flex gap-1 text-orange-500'>
<FaStar />
<FaStar />
<FaStar />
<FaStar />
<FaStar />
</span>
 
 <p className='text-md'>200+ developers joined already</p>
</div>
</div>

    </div>
  )
}

export default UsersRating