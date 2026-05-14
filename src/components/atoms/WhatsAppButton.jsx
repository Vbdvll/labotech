'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {

const phoneNumber = "221785822319" // 🔁 remplace par ton numéro Sénégal

const message = "Bonjour Labo Tech, je souhaite discuter d’un projet digital."

const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

return (

<a
href={url}
target="_blank"
rel="noopener noreferrer"
className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
>

<MessageCircle size={24} />

</a>

)

}