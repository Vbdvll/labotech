export default function Footer(){

return(

<footer className='border-t border-slate-800 py-16 px-8'>

<div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>

{/* Brand */}
<div>

<h3 className='text-2xl font-bold mb-4'>
Labo Tech
</h3>

<p className='text-slate-400'>
Solutions digitales modernes pour entreprises et startups.
</p>

</div>

{/* Links */}
<div>

<h4 className='font-bold mb-4'>
Navigation
</h4>

<ul className='space-y-2 text-slate-400'>

<li>
<a href="#services" className="hover:text-white transition">
Services
</a>
</li>

<li>
<a href="#portfolio" className="hover:text-white transition">
Portfolio
</a>
</li>

<li>
<a href="#contact" className="hover:text-white transition">
Contact
</a>
</li>

</ul>

</div>

{/* Contact */}
<div>

<h4 className='font-bold mb-4'>
Contact
</h4>

<p className='text-slate-400'>
Dakar, Sénégal
</p>

<p className='text-slate-400'>
contact@labotech.com
</p>
<a
href="https://wa.me/221785822319"
className="text-green-400 hover:text-green-300"
target="_blank"
>
WhatsApp
</a>

</div>

</div>

<div className='text-center text-slate-500 mt-12'>
© 2026 Labo Tech — Tous droits réservés
</div>

</footer>

)

}