import React from 'react'

function Shimmer() {
  return (
    <div className="Restaurantlist">
       {Array(10).fill("").map((e,index)=><div key = {index} className='shimmercard'></div>)    }   
    </div>
  )
}

export default Shimmer
