import React from 'react'

const CSInfo = ({context, role}) => {
  return (
    <div className="grid grid-cols-12 pb-16">
        <div className="col-span-12 md:col-span-7 flex-col pb-16 md:pr-24">
            <h2 className="text-xl font-semibold text-[#363636] pb-2">Context</h2>
            <p className="text-[#636363] leading-relaxed">{context}</p>
        </div>

        <div className="col-span-12 md:col-span-5 flex-col pb-16">
            <h2 className="text-xl font-semibold text-[#363636] pb-2">My Role</h2>
            <p className="text-[#636363] leading-relaxed">{role}</p>
        </div>
      </div>
  )
}

export default CSInfo
