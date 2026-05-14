export default function ImpactSection(){

const stats = [
{
value:"+40%",
label:"Augmentation de productivité"
},
{
value:"-30%",
label:"Réduction des coûts opérationnels"
},
{
value:"+2x",
label:"Croissance digitale moyenne"
}
]

return(

<section className='py-32 px-8'>

<h2 className='text-5xl font-bold text-center mb-16'>
Impact Business
</h2>

<div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-6'>

{stats.map((s,index)=>(
<div
key={index}
className='p-8 text-center rounded-3xl bg-white/5 border border-slate-800'
>

<h3 className='text-4xl font-bold text-blue-400'>
{s.value}
</h3>

<p className='text-slate-400 mt-2'>
{s.label}
</p>

</div>
))}

</div>

</section>

)

}