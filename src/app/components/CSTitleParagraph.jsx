import React from 'react'

const CSTitleParagraph = ({largetitle, title, paragraph, paragraph2, columns}) => {
    console.log('Columns:', columns); 

  return (
    <div className='pb-16'>
        <div>
        <h2 className="text-xl font-semibold text-[#B0B0B0] pb-2">{title}</h2>
        <h2 className="text-2xl font-semibold text-[#363636] pb-4">{largetitle}</h2></div>

        <div className="grid grid-cols-12 gap-x-16">
        <div className={`col-span-12 md:col-span-${12/columns}`}><p className="text-[#636363] leading-relaxed pb-8">{paragraph}</p>
        </div>
        
        {columns === 2 && (
        <div className={`col-span-12 md:col-span-${12/columns}`}>
          <p className="text-[#636363] leading-relaxed pb-8">{paragraph2}</p></div>
        )}
      </div>
    </div>

  )
}

export default CSTitleParagraph
