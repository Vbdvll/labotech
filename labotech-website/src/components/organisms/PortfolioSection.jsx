/* TODO: Remplacer par captures d'écran des produits réels (fournies par le client) */
export default function PortfolioSection(){

return(

<section id='portfolio' className='py-24 px-8'>

<h2 className='text-5xl font-bold text-center mb-16'>
Nos produits
</h2>

<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8'>

 {/* Carte DevisFacture */}

<div className='p-8 rounded-3xl bg-white/5 border border-slate-800 backdrop-blur-lg hover:-translate-y-2 transition'>
<h3 className='text-2xl font-bold mb-2'>DevisFacture</h3>
<p className='text-slate-400 mb-6'>
Créez vos devis en 2 minutes depuis votre téléphone, convertissez-les en factures numérotées, envoyez-les par email à vos clients et suivez vos paiements.
</p>
<p className='text-slate-500 text-sm'>
Pour : Auto-entrepreneurs, freelances, artisans et commerçants au Sénégal.
</p>
<a
href="https://devisfacture-rho.vercel.app"
className='inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl px-6 hover:scale-105 transition text-center'
target="_blank"
rel="noopener noreferrer"
>
Découvrir DevisFacture
</a>
</div>

 {/* Carte MiniShop (Marché Central) */}

<div className='p-8 rounded-3xl bg-white/5 border border-slate-800 backdrop-blur-lg hover:-translate-y-2 transition'>
<h3 className='text-2xl font-bold mb-2'>MiniShop / Marché Central</h3>
<p className='text-slate-400 mb-6'>
Une place de marché pour les vendeurs sénégalais : chaque vendeur crée sa boutique, gère ses produits, ses catégories et son stock, et le client commande en un tap par message WhatsApp prérempli.
</p>
<p className='text-slate-500 text-sm'>
Pour : Vendeurs et petits commerçants qui vendent déjà par WhatsApp.
</p>
<a
href="https://shopsn.xyz"
className='inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl px-6 hover:scale-105 transition text-center'
target="_blank"
rel="noopener noreferrer"
>
Découvrir MiniShop
</a>
</div>

</div>

</section>

)
}