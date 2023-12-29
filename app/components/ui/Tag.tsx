import React from 'react'

export interface TagProps {
    type: string
}

//TODO limit type prop to "css" | "ejs" | "html" | "js" | "mongo/mongoose" | "node/express" | "react"

export default function Tag({type}: TagProps) {

    let tagStyle : string = ''

    switch (type) {
        case 'css':
          tagStyle = 'bg-[#0959df] text-white';
          break;
        case 'ejs':
          tagStyle = 'bg-[#dfdd09] text-black'
          break;
        case 'html':
          tagStyle = 'bg-[#2d2b6b] text-black'
          break;
        case 'mongo':
          tagStyle = 'bg-[#00c55b] text-white'
          break;
        case 'node':
          tagStyle = 'bg-[#6aa05c] text-black'
          break;
        case 'react':
          tagStyle = 'bg-[#5fdafb] text-white'
          break;  
        default:
          tagStyle = 'bg-yellow-400 text-black'
      }
    
    const mainTagStyle = 'px-2 py-1 rounded font-bold'

    return (
        <span className={tagStyle +' '+ mainTagStyle}>{type}</span>
    )
}