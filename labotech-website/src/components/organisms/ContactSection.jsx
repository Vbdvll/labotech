'use client'
import { sendEmail } from '@/lib/email'
import { useState } from 'react'

export default function ContactSection(){

const [form,setForm]=useState({
name:'',
email:'',
message:''
})

const handleChange=(e)=>{
setForm({...form,[e.target.name]:e.target.value})
}

const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    await sendEmail(form)
    alert("Message envoyé avec succès 🚀")

    setForm({
      name: '',
      email: '',
      message: ''
    })

  } catch (error) {
    alert("Erreur lors de l'envoi")
  }
}

return(

<section id='contact' className='py-24 px-8'>

<h2 className='text-5xl font-bold text-center mb-16'>
Contactez-nous
</h2>

<form
onSubmit={handleSubmit}
className='max-w-2xl mx-auto space-y-4 bg-white/5 border border-slate-800 p-8 rounded-3xl'
>

<input
name='name'
placeholder='Nom'
onChange={handleChange}
className='w-full p-4 rounded-xl bg-slate-900 outline-none'
/>

<input
name='email'
placeholder='Email'
onChange={handleChange}
className='w-full p-4 rounded-xl bg-slate-900 outline-none'
/>

<textarea
name='message'
placeholder='Votre projet...'
onChange={handleChange}
className='w-full p-4 rounded-xl bg-slate-900 h-32 outline-none'
/>

<button
type='submit'
className='w-full p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] transition'
>

Envoyer le message

</button>

</form>

</section>

)

}