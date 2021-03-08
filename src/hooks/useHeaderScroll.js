import {useEffect, useState} from 'react'

const useHeaderScroll = () => {
    
    const [showFixed, setShowFixed] = useState(false)
  
    useEffect(function(){
      
      const onScroll = e => {
          const newShowFixed = window.scrollY > 100
          showFixed != newShowFixed && setShowFixed(newShowFixed)
      }
  
      document.addEventListener('scroll',onScroll)
  
      return () => document.removeEventListener('scroll',onScroll);
    })
}

export default useHeaderScroll;