export default function ContactSection(){

return(

<section id='contact' className='py-24 px-8'>

<h2 className='text-5xl font-bold text-center mb-16'>
Contactez-nous
</h2>

<div className='max-w-2xl mx-auto bg-white/5 border border-slate-800 p-8 rounded-3xl text-center space-y-6'>

<p className='text-slate-300 text-lg leading-relaxed'>
Décrivez-nous votre projet — nous répondons personnellement sous peu.
</p>

<a
href="mailto:labotech221@gmail.com?subject=Projet%20digital%20—%20Labo%20Tech"
className='block w-full p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition font-medium'
>

Envoyer un email

</a>

<a
href="https://wa.me/221785822319"
className='block w-full p-4 rounded-xl border border-green-500 text-green-400 hover:bg-green-500/10 transition'
>

Ou discuter sur WhatsApp

</a>

<p className='text-slate-500 text-sm'>
labotech221@gmail.com — Dakar, Sénégal
</p>

</div>

</section>

)
}