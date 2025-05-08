import heroimage from '../assets/hlo.png'

function Hero() {
    

    return (
        
        <section className="text-center bg-gray-100 p-7">

<img src={heroimage} alt="" className='rounded-md mx-auto shadow-lg' />
            <h2 className='mt-2 text-xl md:text-4xl'>Build Amazing UI's With React & Vite</h2>
            <p className='mt-2 font-light'>Fast Light Weight & Modern Frontend Development</p>
            <button className='mt-1 bg-blue-600 p-2 rounded cursor-pointer font-semibold text-white'>Get Started</button>
        </section>


    )
}

export default Hero