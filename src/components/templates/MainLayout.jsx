import Navbar from '../organisms/Navbar'
import WhatsAppButton from '../atoms/WhatsAppButton'
export default function MainLayout({
children
}){

return(

<div className='min-h-screen bg-slate-950 text-white'>

<Navbar/>

{children}
<WhatsAppButton />

</div>

)

}