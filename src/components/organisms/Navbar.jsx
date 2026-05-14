'use client'

import { useState } from 'react'
import Button from '../atoms/Button'

export default function Navbar(){

const [open,setOpen]=useState(false)

return(

<nav className='sticky top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-slate-800'>

<div className='max-w-7xl mx-auto flex justify-between items-center p-5'>

<h1 className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
Labo Tech
</h1>

{/* Desktop */}
<div className='hidden md:flex gap-8 text-slate-300'>
<a href='#services'>Services</a>
<a href='#portfolio'>Portfolio</a>
<a href='#contact'>Contact</a>
</div>

{/* Mobile button */}
<button
className='md:hidden'
onClick={()=>setOpen(!open)}
>
☰
</button>

{/* <Button>
Devis
</Button> */}

</div>

{/* Mobile menu */}
{open && (
<div className='md:hidden px-6 pb-6 flex flex-col gap-4 text-slate-300'>
<a href='#services'>Services</a>
<a href='#portfolio'>Portfolio</a>
<a href='#contact'>Contact</a>
</div>
)}

</nav>

)

}