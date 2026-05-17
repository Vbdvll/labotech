export default function AISection(){

const features = [
"Chatbots intelligents pour entreprises",
"Automatisation WhatsApp business",
"Analyse de données avancée",
"Assistants IA personnalisés",
"Optimisation des workflows"
]

return(

<section className='py-32 px-8'>

<h2 className='text-5xl font-bold text-center mb-16'>
IA & Automatisation
</h2>

<div className='max-w-5xl mx-auto space-y-4'>

{features.map((f,index)=>(
<div
key={index}
className='p-6 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-800'
>
🤖 {f}
</div>
))}

</div>

</section>

)

}