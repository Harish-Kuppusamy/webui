import Navbar from './components/Navbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Article from './components/Article'
import Table from './components/Table'
import Aside from './components/Aside'
import Footer from './components/Footer'

import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <div className=" container flex flex-col  md:flex-row md:mx-auto p-6 ">
        <main className="flex-1">
          <Article />
          <Table />
        </main>
       
          <Aside className='md:ml-6'/>
       
      </div>

      <Footer/>
    </>
  );
}

export default App
