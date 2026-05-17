import { projects } from '@/data/projects'
import ProjectCard from '../molecules/ProjectCard'

export default function PortfolioSection(){

return(

<section id='portfolio' className='py-24 px-8'>

<h2 className='text-5xl font-bold text-center mb-16'>

Nos Projets

</h2>

<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8'>

{projects.map((p,index)=>(
<ProjectCard key={index} {...p}/>
))}

</div>

</section>

)

}