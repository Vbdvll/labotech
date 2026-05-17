export default function PricingSection(){

const plans = [
{
name: "Starter",
price: "50 000 FCFA",
features: [
"Site vitrine simple",
"Design responsive",
"Support basique"
]
},
{
name: "Business",
price: "150 000 FCFA",
features: [
"Site + fonctionnalités avancées",
"SEO optimisé",
"Support prioritaire"
]
},
{
name: "Premium",
price: "Sur devis",
features: [
"Application web/mobile",
"SaaS ou plateforme complète",
"Accompagnement stratégique"
]
}
]

return(

<section className='py-32 px-8' id="pricing">

<h2 className='text-5xl font-bold text-center mb-16'>
Nos Offres
</h2>

<div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>

{plans.map((plan,index)=>(

<div
key={index}
className='p-8 rounded-3xl bg-white/5 border border-slate-800 hover:scale-105 transition'
>

<h3 className='text-2xl font-bold mb-2'>
{plan.name}
</h3>

<p className='text-3xl font-bold text-blue-400 mb-6'>
{plan.price}
</p>

<ul className='space-y-2 text-slate-300 mb-6'>

{plan.features.map((f,i)=>(
<li key={i}>• {f}</li>
))}

</ul>

<a
href="#contact"
className='block text-center bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl'
>
Choisir
</a>

</div>

))}

</div>

</section>

)

}