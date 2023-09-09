import {useEffect} from 'react'

export default function useSetHeader(setImageSize) {
   useEffect(() => {
     function scrollMouse() {
        if(window.scrollY>1)
         {
        setImageSize('h-16')
        } else {
           setImageSize('h-20')
        }
     }
        window.addEventListener('scroll',scrollMouse)
     return () => {
       window.removeEventListener('scroll',scrollMouse)
     }
   },[])
   
}
