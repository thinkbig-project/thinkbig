import React from 'react'

interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    tagType: "css" | "ejs" | "html" | "js" | "mongo/mongoose" | "node/express" | "react"
}

//TODO limit tagType prop to "css" | "ejs" | "html" | "js" | "mongo/mongoose" | "node/express" | "react"

export default function Tag({tagType}: TagProps) {

    let conditionalTagStyle : string = ''
    // CONDITIONAL FORMATTING BASED ON 'tagType' of tag.  types defined as : 
    switch (tagType) {
        case 'css':
          conditionalTagStyle = 'bg-[#0959df] text-white';
          break;
        case 'ejs':
          conditionalTagStyle = 'bg-[#98265b] text-white'
          break;
        case 'html':
          conditionalTagStyle = 'bg-[#2d2b6b] text-white'
          break;
        case 'js':
          conditionalTagStyle = 'bg-[#dfdd09] text-white'
          break;
        case 'mongo/mongoose':
          conditionalTagStyle = 'bg-[#00c55b] text-white'
          break;
        case 'node/express':
          conditionalTagStyle = 'bg-[#6aa05c] text-white'
          break;
        case 'react':
          conditionalTagStyle = 'bg-[#5fdafb] text-white'
          break;  
        default:
          conditionalTagStyle = 'bg-yellow-400 text-black'
      }
    
    const mainTagStyle = 'px-2 py-1 rounded font-bold'

    return (
        <span className={conditionalTagStyle +' '+ mainTagStyle}>{tagType}</span>
    )
}