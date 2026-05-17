export default function StatCard({value,label}){

return(

<div className='rounded-3xl bg-white/5 border border-slate-800 backdrop-blur-lg p-8 text-center hover:scale-105 transition'>

<h3 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>

{value}

</h3>

<p className='text-slate-400 mt-2'>

{label}

</p>

</div>

)

}