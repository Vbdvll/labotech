'use client'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/animations'
import { services } from '@/data/services'
import ServiceCard from '../molecules/ServiceCard'

export default function ServicesSection() {

return (

<section id='services' className='py-32 px-8'>

{/* Title */}
<h2 className='text-center text-5xl font-bold mb-16'>
Nos Services
</h2>

{/* Grid ANIMÉE DIRECTEMENT */}
<motion.div
className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'
variants={fadeUp}
initial="hidden"
whileInView="show"
transition={{ duration: 0.6 }}
viewport={{ once: true }}
>

{services.map((service, index) => (
<ServiceCard
key={index}
icon={service.icon}
title={service.title}
description={service.description}
/>
))}

</motion.div>

</section>

)

}