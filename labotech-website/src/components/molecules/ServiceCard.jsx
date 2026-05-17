export default function ServiceCard({ icon: Icon, title, description }) {

return (

<div className="group p-8 rounded-3xl bg-white/5 border border-slate-800 backdrop-blur-lg hover:-translate-y-2 transition-all duration-300">

{/* ICON */}
<div className="mb-4 text-blue-400 group-hover:scale-110 transition">

<Icon className="w-8 h-8" />

</div>

{/* TITLE */}
<h3 className="text-xl font-bold mb-2">
{title}
</h3>

{/* DESCRIPTION */}
<p className="text-slate-400 leading-relaxed">
{description}
</p>

</div>

)

}