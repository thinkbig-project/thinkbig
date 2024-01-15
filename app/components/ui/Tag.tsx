import React from 'react'

import { TagProps } from '@/types'; // type/interface props

export default function Tag({ tagType }: TagProps) {

  // BASE FORMATTING FOR ALL TAGS

  const mainTagStyle = 'text-xs font-medium font-sans me-2 px-2.5 py-0.5 rounded'

  // CONDITIONAL FORMATTING BASED ON 'tagType' of tag. 

  let conditionalTagStyle: string = ''

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
      conditionalTagStyle = 'bg-[#dfdd09] text-black'
      break;
    case 'mongo/mongoose':
      conditionalTagStyle = 'bg-[#00c55b] text-black'
      break;
    case 'node/express':
      conditionalTagStyle = 'bg-[#6Da460] text-black'
      break;
    case 'react':
      conditionalTagStyle = 'bg-[#5fdafb] text-black'
      break;
    default:
      //this should never actually appear since types are restricted
      conditionalTagStyle = '#EAD02A text-black'
  }

  //100DEVS, WE GO GET!

  return (
    <span className={conditionalTagStyle + ' ' + mainTagStyle}>{tagType}</span>
  )


}