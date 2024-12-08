import React from 'react'

function Heading({ children }: any) {
    return (
        <h2 className='text-[30px] my-5 font-bold text-center text-[var(--heading)]' >{children}</h2>

    )
}

export default Heading