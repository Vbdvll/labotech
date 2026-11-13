import TransformationSection from '@/components/organisms/TransformationSection'
import AISection from '@/components/organisms/AISection'
import PricingSection from '@/components/organisms/PricingSection'
import MainLayout from '@/components/templates/MainLayout'
import Hero from '@/components/organisms/Hero'
import ServicesSection from '@/components/organisms/ServicesSection'
import WhyUsSection from '@/components/organisms/WhyUsSection'
import PortfolioSection from '@/components/organisms/PortfolioSection'

import ContactSection from '@/components/organisms/ContactSection'
import Footer from '@/components/organisms/Footer'

export default function Home(){

return(

<MainLayout>

<Hero/>

<TransformationSection/>
<AISection/>

<ServicesSection/>

<PricingSection/>

<PortfolioSection/>

<ContactSection/>

<Footer/>

</MainLayout>

)
}