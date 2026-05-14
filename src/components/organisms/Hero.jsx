'use client'

import { motion } from 'framer-motion'
import Button from '../atoms/Button'

export default function Hero() {

return (

<section className='relative overflow-hidden py-32 px-8'>

{/* Background glow */}
<div className='absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#2563eb_0,_transparent_60%)]' />

<motion.div
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
className='relative max-w-7xl mx-auto text-center'
>

{/* Badge */}
<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-slate-900/50 mb-6'>

<span className='w-2 h-2 bg-blue-400 rounded-full animate-pulse'></span>

<span className='text-sm text-slate-300'>
Agence digitale • SaaS • IA
</span>

</div>

{/* Title */}
<h1 className='text-5xl md:text-7xl font-bold leading-tight'>

Construisons votre

<span className='bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
croissance digitale
</span>

</h1>

{/* Subtitle */}
<p className='mt-8 max-w-3xl mx-auto text-slate-300 text-xl leading-relaxed'>

Nous aidons les startups et entreprises à
<span className="text-white font-semibold">
 digitaliser, automatiser et accélérer leur croissance
</span>
grâce à des solutions web, SaaS et IA sur mesure.

</p>

{/* Buttons */}
<div className='flex justify-center gap-4 mt-10 flex-wrap'>

{/* Services */}
<a href="#services">
  <Button>
    Nos services
  </Button>
</a>

{/* Contact */}
<a href="#contact">
  <Button variant='outline'>
    Nous contacter
  </Button>
</a>

{/* WhatsApp */}
<a
href="https://wa.me/221785822319?text=Bonjour%20Labo%20Tech,%20je%20souhaite%20discuter%20d’un%20projet%20digital."
target="_blank"
rel="noopener noreferrer"
className="px-6 py-3 rounded-2xl bg-green-500 hover:bg-green-600 transition text-white"
>
WhatsApp direct
</a>

</div>

</motion.div>

</section>

)

}