import { useState } from 'react'

export function App() {
  const [heightInCentimetris, setHeightInCentimetris] = useState("100");
  const [weight, setWeight] = useState("50");
  const [imc, setIMC] = useState("??.??");
  const [imcRating, setIMCRating] = useState("");
  const [image, setImage] = useState("./src/assets/silueta.png");
  const [sex, setSex] = useState("");

  const heightInMeters = heightInCentimetris / 100

  function handleSubmit(event) {
    event.preventDefault();

    const IMC = weight / (heightInMeters ** 2);
    setIMC(String(IMC.toFixed(2)).padStart(5, '0'));

    if(IMC < 17) {
      setIMCRating("Muito abaixo do peso");
      setImage(`./src/assets/${sex === 'M' ? 'homem' : 'mulher'}-magro.png`);
      return
    }

    if(IMC < 18.5) {
      setIMCRating("Abaixo do peso");
      setImage(`./src/assets/${sex === 'M' ? 'homem' : 'mulher'}-magro.png`);
      return
    }

    if(IMC >= 18.5 && IMC <= 24.9) {
      setIMCRating("Peso normal");
      setImage(`./src/assets/${sex === 'M' ? 'homem' : 'mulher'}-normal.png`);
      return
    }

    if(IMC >= 25 && IMC <= 29.9) {
      setIMCRating("Sobrepeso");
      setImage(`./src/assets/${sex === 'M' ? 'homem' : 'mulher'}-magro.png`);
      return
    }

    if(IMC >= 30 && IMC <= 34.9) {
      setIMCRating("Obesidade grau 1");
      setImage(`./src/assets/${sex === 'M' ? 'homem' : 'mulher'}-obeso.png`);
      return
    }

    if(IMC >= 35 && IMC <= 39.9) {
      setIMCRating("Obesidade grau 2");
      setImage(`./src/assets/${sex === 'M' ? 'homem' : 'mulher'}-obeso-2.png`);
      return
    }

    if(IMC >= 40) {
      setIMCRating("Obesidade grau 3");
      setImage(`./src/assets/${sex === 'M' ? 'homem' : 'mulher'}-obeso-2.png`);
      return
    }

  }

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
       <form className="w-full lg:w-[473px] flex flex-col divide-y divide-[#D6C699]" onSubmit={handleSubmit}>
          <fieldset className="pb-[50px] space-y-[12px]">
            <legend className="text-[28px] text-center lg:text-left font-bold">Escolha o seu sexo:</legend>
            <div className="flex justify-center md:justify-between flex-wrap gap-4 md:gap-0">
                <label className="w-[188px] h-[80px] px-[16px] py-[12px] bg-[#FDF7E7] border border-[#04269D] rounded-xl flex items-center gap-[8px] has-[:checked]:bg-[#B8C7FC] cursor-pointer">
                  <div>
                    <input 
                      className="sr-only" 
                      type="radio" 
                      name="sex"
                      value={sex} 
                      onChange={() => setSex('M')} 
                      required
                    />
                    <img className="rounded-full" src="./m.jpg" alt="" />
                  </div>
                  <span className="text-[20px]">Maculino</span>
                </label>
                <label className="w-[188px] h-[80px] px-[16px] py-[12px] bg-[#FDF7E7] border border-[#04269D] rounded-xl flex items-center gap-[8px] has-[:checked]:bg-[#B8C7FC] cursor-pointer">
                  <div>
                    <input 
                      className="sr-only" 
                      type="radio" 
                      name="sex" 
                      value={sex}
                      onChange={() => setSex('F')} 
                      required
                    />
                    <img className="rounded-full" src="./f.jpg" alt="" />
                  </div>
                  <span className="text-[20px]">Feminino</span>
                </label>
            </div>
          </fieldset>
          <fieldset className="space-y-[26px] pt-[30px]">
            <legend className="sr-only">Defina a sua altura e o seu peso:</legend>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <strong className="text-[28px]">Altura:</strong>
                <strong className="text-[28px]">{heightInMeters.toFixed(2)}m</strong>
              </div>
              <input 
                className="w-full" 
                type="range" 
                name="" 
                min="0" 
                max="240" 
                step="1" 
                value={heightInCentimetris}
                onChange={(event) => setHeightInCentimetris(event.target.value)}
                required
              />
              <div className="flex justify-between">
                <span>0cm</span>
                <span>240cm</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <strong className="text-[28px]">Peso:</strong>
                <strong className="text-[28px]">{weight}kg</strong>
              </div>
              <input 
                className="w-full" 
                type="range" 
                name=""
                min="0"
                max="635"
                step="1"
                value={weight}
                onChange={(event) => setWeight(event.target.value)} 
                required
              />
              <div className="flex justify-between">
                <span>0kg</span>
                <span>635kg</span>
              </div>
            </div>
          </fieldset>
          <button 
            className="bg-[#A94D30] hover:bg-[#8d3e25] w-full py-[12px] text-2xl text-white rounded-2xl mt-[48px]" 
            type="submit"
          >
            Calcular IMC
          </button>
       </form>
    </main>
  )
}
