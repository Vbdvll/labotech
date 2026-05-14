import StatCard from '../molecules/StatCard'

export default function StatsSection(){

const stats = [
{
value: "20+",
label: "Projets réalisés"
},
{
value: "95%",
label: "Satisfaction client"
},
{
value: "24/7",
label: "Support disponible"
},
{
value: "100%",
label: "Solutions sur mesure"
}
]

return(

<section className='py-24 px-8'>

<div className='max-w-7xl mx-auto grid md:grid-cols-4 gap-6'>

{stats.map((stat,index)=>(
<StatCard
key={index}
value={stat.value}
label={stat.label}
/>
))}

</div>

</section>

)

}