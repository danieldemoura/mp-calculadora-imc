import silueta from './assets/silueta.png'

import { useState } from 'react'
import { Form } from './components/Form'

export function App() {
  const [imc, setIMC] = useState("??.??");
  const [imcRating, setIMCRating] = useState("");
  const [image, setImage] = useState(silueta);

  return (
    <main className="container mx-auto px-[16px] lg:px-0 py-[50px] flex flex-col lg:flex-row lg:justify-center items-center gap-[40px] lg:gap-[100px]">
       <figure className="relative w-[341px] lg:h-[536px] bg-[#fbdea4] rounded-[32px] overflow-hidden">
          <img className="w-full h-full object-cover" src={image} alt="" />
          <figcaption className="absolute left-0 bottom-0 w-full h-[193px] flex flex-col justify-between items-center text-white bg-[#00000080] backdrop-blur-[5px] rounded-l-[32px] rounded-r-[32px] py-6">
            <div>
              <h1 className="uppercase text-[28px] text-center">Seu IMC é:</h1>
              <h2 className="text-[3.5rem] font-bold mt-[-18px]">{imc}</h2>
            </div>
            <p className="text-[1.5rem]">{imcRating}</p>
          </figcaption>
       </figure>
       <Form setIMC={setIMC} setIMCRating={setIMCRating} setImage={setImage} />
    </main>
  )
}
