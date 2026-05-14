export default function Button({
  children,
  variant='primary'
}) {

const styles = {
  primary:
    'bg-gradient-to-r from-blue-600 to-purple-600 text-white',

  outline:
    'border border-slate-700 text-white hover:bg-slate-900'
}

return(

<button
className={`
px-6
py-3
rounded-2xl
font-medium
transition-all
duration-300
hover:scale-105
${styles[variant]}
`}
>

{children}

</button>

)

}