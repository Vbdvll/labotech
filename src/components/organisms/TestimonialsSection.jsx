export default function TestimonialsSection(){

const testimonials = [
{
name: "Awa Ndiaye",
role: "Entrepreneure",
text: "Labo Tech a transformé notre présence digitale avec un site moderne et performant."
},
{
name: "Moussa Diallo",
role: "Startup Founder",
text: "Equipe sérieuse, rapide et très professionnelle."
},
{
name: "Fatou Diop",
role: "PME Manager",
text: "Excellent travail, livraison rapide et communication parfaite."
}
]

return(

<section className='py-24 px-8'>

<h2 className='text-5xl font-bold text-center mb-16'>

Ils nous font confiance

</h2>

<div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-6'>

{testimonials.map((t,index)=>(
<div
key={index}
className='p-6 rounded-3xl bg-white/5 border border-slate-800'
>

<p className='text-slate-300 mb-6'>
"{t.text}"
</p>

<div className='font-bold'>
{t.name}
</div>

<div className='text-sm text-slate-400'>
{t.role}
</div>

</div>
))}

</div>

</section>

)

}