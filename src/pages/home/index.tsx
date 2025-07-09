import { Social } from "../../components/social"
import { FaFacebook, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa"

export function Home(){
  return(
   
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <h1 className="md:text-4xl  text-3xl font-bold text-white mt-20">LinkTree</h1>
      <span className="text-gray-50 mb-5 mt-3">Veja meus links 👇</span>

      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg select-none transition-transform hover:scale-105 cursor-pointer">
          <a>
            <p className="text-base md:text-lg">
              Canal no Youtube
            </p>
          </a>
        </section>

        <footer className="flex justify-center gap-3 my-4">
          <Social url='https://www.facebook.com/?locale=pt_BR'>
           <FaFacebook size={35} color="#FFF"/>
          </Social>

          <Social url='https://www.instagram.com/'>
           <FaInstagram size={35} color="#FFF"/>
          </Social>

          <Social url='https://www.youtube.com/'>
           <FaYoutube size={35} color="#FFF"/>
          </Social>

          <Social url='https://www.tiktok.com/pt-BR/'>
           <FaTiktok size={35} color="#FFF"/>
          </Social>
          
        </footer>

      </main>

    </div>
  )
}