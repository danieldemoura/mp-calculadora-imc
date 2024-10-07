import homemMagro from '../assets/homem-magro.png'
import homemNormal from '../assets/homem-normal.png'
import homemObeso from '../assets/homem-obeso.png'
import homemObeso2 from '../assets/homem-obeso-2.png'
import mulherMagra from '../assets/mulher-magra.png'
import mulherNormal from '../assets/mulher-normal.png'
import mulherObeso from '../assets/mulher-obesa.png'
import mulherObeso2 from '../assets/mulher-obesa-2.png'

import { useState } from 'react'

import { InputRadio } from './InputRadio'
import { InputRange } from './InputRange'

export const Form = ({ setIMC, setIMCRating, setImage }) => {
	const [heightInCentimetris, setHeightInCentimetris] = useState("100");
	const [weight, setWeight] = useState("50");
	const [sex, setSex] = useState("");

	const heightInMeters = heightInCentimetris / 100

  	function handleSubmit(event) {
	    event.preventDefault();

	    const IMC = weight / (heightInMeters ** 2);
	    setIMC(String(IMC.toFixed(2)).padStart(5, '0'));

	    if(IMC < 17) {
	      setIMCRating("Muito abaixo do peso");
	      setImage(sex === 'M' ? homemMagro : mulherMagra);
	      return
	    }

	    if(IMC < 18.5) {
	      setIMCRating("Abaixo do peso");
	      setImage(sex === 'M' ? homemMagro : mulherMagra);
	      return
	    }

	    if(IMC >= 18.5 && IMC <= 24.9) {
	      setIMCRating("Peso normal");
	      setImage(sex === 'M' ? homemNormal : mulherNormal);
	      return
	    }

	    if(IMC >= 25 && IMC <= 29.9) {
	      setIMCRating("Sobrepeso");
	      setImage(sex === 'M' ? homemObeso : mulherObeso);
	      return
	    }

	    if(IMC >= 30 && IMC <= 34.9) {
	      setIMCRating("Obesidade grau 1");
	      setImage(sex === 'M' ? homemObeso : mulherObeso);
	      return
	    }

	    if(IMC >= 35 && IMC <= 39.9) {
	      setIMCRating("Obesidade grau 2");
	      setImage(sex === 'M' ? homemObeso2 : mulherObeso2);
	      return
	    }

	    if(IMC >= 40) {
	      setIMCRating("Obesidade grau 3");
	      setImage(sex === 'M' ? homemObeso2 : mulherObeso2);
	      return
	    }
  	}

	return (
		<form className="w-full lg:w-[473px] flex flex-col divide-y divide-[#D6C699]" onSubmit={handleSubmit}>
			<fieldset className="pb-[50px] space-y-[12px]">
				<legend className="text-[28px] text-center lg:text-left font-bold">Escolha o seu sexo:</legend>
				<div className="flex justify-center md:justify-between flex-wrap gap-4 md:gap-0">
				    <InputRadio value="M" avatar="./m.jpg" setSex={setSex}>Masculino</InputRadio>
				    <InputRadio value="F" avatar="./f.jpg" setSex={setSex}>Feminino</InputRadio>
				</div>
			</fieldset>
			<fieldset className="space-y-[26px] pt-[30px]">
				<legend className="sr-only">Defina a sua altura e o seu peso:</legend>
				<div className="flex flex-col">
					<div className="flex justify-between">
						<strong className="text-[28px]">Altura:</strong>
						<strong className="text-[28px]">{heightInMeters.toFixed(2)}m</strong>
					</div>
					<InputRange min="0" max="240" name="height" value={heightInCentimetris} setHeightInCentimetris={setHeightInCentimetris}/>
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
					<InputRange min="0" max="635" name={weight} value={weight} setWeight={setWeight}/>
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
	)
}