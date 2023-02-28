import React from 'react'

const BackToTop = () => {

    window.addEventListener('scroll', function() {
        const back_to_top = this.document.getElementById('back-to-top')
        // const footer = this.document.getElementById('footer').offsetTop
        const hero = this.document.getElementById('hero').getBoundingClientRect().height
        // console.log(footer);
        if(this.scrollY > hero) {
            back_to_top.classList.remove("scale-x-0", "scale-y-0")
            back_to_top.classList.add("scale-x-100","scale-y-100")
        } else{
            back_to_top.classList.remove("scale-x-100","scale-y-100")
            back_to_top.classList.add("scale-x-0", "scale-y-0")
        }
        // if(this.scrollY > 3850) {
        //     back_to_top.classList.remove("bg-slate-900", "text-slate-100")
        //     back_to_top.classList.add("bg-slate-100", "text-slate-900")
        // } else{
        //     back_to_top.classList.remove("bg-slate-100", "text-slate-900")
        //     back_to_top.classList.add("bg-slate-900", "text-slate-100")
        // }
    })

    const handleScroll=() => {
        scrollTo(0,0)
    }

  return (
    <div  id='back-to-top' onClick={handleScroll} className='fixed scale-x-0 scale-y-0 bottom-4 right-4 2xl:right-[500px] bg-slate-300 rounded-full shadow-xl 
    hover:scale-x-110 hover:scale-y-110 transition-all duration-200 w-10 h-10 cursor-pointer p-2 z-[300] text-slate-800
    '>
        <span className='material-symbols-rounded '>arrow_upward</span>
    </div>
  )
}

export default BackToTop