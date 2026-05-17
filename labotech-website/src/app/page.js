import TransformationSection from '@/components/organisms/TransformationSection'
import AISection from '@/components/organisms/AISection'
import ImpactSection from '@/components/organisms/ImpactSection'
import PricingSection from '@/components/organisms/PricingSection'
import MainLayout from '@/components/templates/MainLayout'
import Hero from '@/components/organisms/Hero'
import StatsSection from '@/components/organisms/StatsSection'
import ServicesSection from '@/components/organisms/ServicesSection'
import WhyUsSection from '@/components/organisms/WhyUsSection'
import PortfolioSection from '@/components/organisms/PortfolioSection'
import TestimonialsSection from '@/components/organisms/TestimonialsSection'
import ContactSection from '@/components/organisms/ContactSection'
import Footer from '@/components/organisms/Footer'

export default function Home(){

return(

<MainLayout>

<Hero/>

<StatsSection/>

<TransformationSection/>
<AISection/>
<ImpactSection/>

<ServicesSection/>
<PricingSection/>

<PortfolioSection/>
<TestimonialsSection/>

<ContactSection/>

<Footer/>

</MainLayout>

)

}