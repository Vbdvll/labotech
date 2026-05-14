import Navbar from '../organisms/Navbar'
import WhatsAppButton from '../atoms/WhatsAppButton'
import { Analytics } from "@vercel/analytics/next"
export default function MainLayout({
children
}){

return(

<div className='min-h-screen bg-slate-950 text-white'>

<Navbar/>
<Analytics />
{children}
<WhatsAppButton />

</div>

)

}