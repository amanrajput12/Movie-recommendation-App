import React from 'react'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div className='mt-4'>
         <div className='absolute -z-30 w-screen h-screen'>
            <img className='h-screen w-screen object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
        </div>
        <div className='pt-[40%] md:p-0'>
        <GptSearchBar/>
        </div>
    </div>
  )
}

export default GptSearch