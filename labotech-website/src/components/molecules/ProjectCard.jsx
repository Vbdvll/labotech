export default function ProjectCard({title,type,description,tech}){

return(

<div className='p-8 rounded-3xl bg-white/5 border border-slate-800 backdrop-blur-lg hover:-translate-y-2 transition'>

<h3 className='text-2xl font-bold mb-2'>
{title}
</h3>

<p className='text-blue-400 text-sm mb-2'>
{type}
</p>

<p className='text-slate-400 mb-4'>
{description}
</p>

<span className='text-xs px-3 py-1 rounded-full bg-slate-800'>
{tech}
</span>

</div>

)

}