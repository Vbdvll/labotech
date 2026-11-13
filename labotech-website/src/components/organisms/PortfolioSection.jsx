const products = [
  {
    id: "devisfacture",
    name: "DevisFacture",
    tagline: "Devis et factures pro, directement depuis le chantier.",
    description: "Créez vos devis en 2 minutes depuis votre téléphone, convertissez-les en factures numérotées, envoyez-les par email à vos clients et suivez vos paiements.",
    audience: "Auto-entrepreneurs, freelances, artisans et commerçants au Sénégal.",
    screenshot: "/products/devisfacture.jpg",
    url: "https://devisfacture-rho.vercel.app",
    urlDisplay: "devisfacture-rho.vercel.app",
    cta: "Découvrir DevisFacture",
    accent: "#c2410c",
    accentText: "#fb923c",
    alt: "Capture d'écran de DevisFacture : page d'accueil Devis et factures directement depuis le chantier"
  },
  {
    id: "minishop",
    name: "MiniShop · Marché Central",
    tagline: "Plusieurs boutiques, une seule promenade.",
    description: "Une place de marché pour les vendeurs sénégalais : chaque vendeur crée sa boutique, gère ses produits, ses catégories et son stock, et le client commande en un tap par message WhatsApp prérempli.",
    audience: "Vendeurs et petits commerçants qui vendent déjà par WhatsApp.",
    screenshot: "/products/minishop.jpg",
    url: "https://shopsn.xyz",
    urlDisplay: "shopsn.xyz",
    cta: "Découvrir MiniShop",
    accent: "#166534",
    accentText: "#4ade80",
    alt: "Capture d'écran de Marché Central : boutiques sénégalaises en ligne avec commande WhatsApp"
  }
]

export default function PortfolioSection(){

return(

<section id='portfolio' className='py-24 px-8'>

<h2 className='text-5xl font-bold text-center'>

Nos produits

</h2>

<p className='text-center text-slate-400 mt-4 mb-16'>

Deux applications disponibles en ligne dès aujourd'hui. 

</p>

<div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8'>

{products.map((p)=>(

<article
key={p.id}
className='group rounded-3xl bg-white/5 border border-slate-800 overflow-hidden hover:-translate-y-2 hover:border-slate-700 transition-all duration-300 flex flex-col'
>

{/* Mock browser window */}
<div className='bg-slate-900/80 border-b border-slate-800 px-4 py-3 flex items-center gap-3'>

<div className='flex gap-1.5' aria-hidden='true'>
<span className='w-3 h-3 rounded-full bg-red-400/80'></span>
<span className='w-3 h-3 rounded-full bg-yellow-400/80'></span>
<span className='w-3 h-3 rounded-full bg-green-400/80'></span>
</div>

<div className='flex-1 text-center text-xs text-slate-500 bg-slate-950 border border-slate-800 rounded-md px-3 py-1 truncate'>
{p.urlDisplay}
</div>

</div>

{/* Screenshot */}
<a
href={p.url}
target='_blank'
rel='noopener noreferrer'
className='block overflow-hidden h-64 md:h-80 border-b border-slate-800'
>
<img
src={p.screenshot}
alt={p.alt}
className='w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500'
/>
</a>

{/* Body */}
<div className='p-6 md:p-8 flex flex-col flex-1'>

<div className='flex items-center gap-3'>
<span className='w-2.5 h-2.5 rounded-full shrink-0' style={{background:p.accent}}></span>
<h3 className='text-2xl font-bold leading-snug'>{p.name}</h3>
</div>

<p className='text-sm font-medium mt-2' style={{color:p.accentText}}>{p.tagline}</p>

<p className='text-slate-400 mt-4 leading-relaxed'>{p.description}</p>

<p className='text-slate-500 text-sm mt-3'>Pour : {p.audience}</p>

<div className='mt-auto pt-6'>

<a
href={p.url}
target='_blank'
rel='noopener noreferrer'
className='inline-flex items-center gap-2 font-medium text-blue-400 hover:text-blue-300 transition'
>
{p.cta}
<span aria-hidden='true'>→</span>
</a>

</div>

</div>

</article>
))}

</div>

</section>

)
}