import heroimg from '../assets/hero.jpg'

function Header() {
    


    return (
    

        <header className="h-96 w-screen md:h-screen md:w-full bg-cover bg-no-repeat bg-center flex items-start justify-center mt-14" style={{ backgroundImage:`url(${heroimg})`  }}>
            <h1 className="text-xl font-light cursor-pointer text-black p-1 mt-4 md:p-4 md:text-4xl">Welcome To My Website</h1>

 </header>
)

}

export default Header