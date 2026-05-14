export default function WhyUsSection(){

const items = [
"Solutions modernes et performantes",
"Accompagnement personnalisé",
"Design orienté conversion",
"Technologies récentes",
"Livraison rapide et fiable"
]

return(

<section className='py-24 px-8'>

<h2 className='text-5xl font-bold text-center mb-16'>

Pourquoi Labo Tech ?

</h2>

<div className='max-w-4xl mx-auto space-y-6'>

{items.map((item,index)=>(
<div
key={index}
className='p-6 rounded-2xl bg-white/5 border border-slate-800 hover:bg-white/10 transition'
>

{item}

</div>
))}

</div>

</section>

)

}