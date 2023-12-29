import React from 'react'

export interface TagProps {
    type: string
}

//TODO limit type prop to "css" | "ejs" | "html" | "js" | "mongo/mongoose" | "node/express" | "react"

export default function Tag({type}: TagProps) {
    console.log('loading tag', type)
    

    let tagStyle : string = ''
    console.log(tagStyle)

    switch (type) {
        case 'css':
          tagStyle = 'bg-blue-300 text-white';
          break;
        case 'ejs':
          tagStyle = 'bg-red-300 text-black'
          break;
        case 'html':
          tagStyle = 'bg-[#2d2b6b] text-black'
          break;
        case 'mongo':
          tagStyle = 'bg-green-700 text-white'
          break;
        case 'node':
          tagStyle = 'bg-green-300 text-black'
          break;
        case 'react':
          tagStyle = 'bg-blue-400 text-white'
          break;  
        default:
          tagStyle = 'bg-yellow-400 text-black'
      }
    console.log('swtich applied', tagStyle)
    
    const mainTagStyle = 'px-2 py-1 rounded font-bold'

    return (
        <span className={tagStyle +' '+ mainTagStyle}>{type}</span>
    )
}