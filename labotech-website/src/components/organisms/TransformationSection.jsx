export default function TransformationSection(){

const items = [
"Digitalisation des processus métiers",
"Automatisation des tâches répétitives",
"Création de plateformes SaaS sur mesure",
"Optimisation des performances business"
]

return(

<section className='py-32 px-8'>

<h2 className='text-5xl font-bold text-center mb-16'>
Transformation Digitale
</h2>

<div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-6'>

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