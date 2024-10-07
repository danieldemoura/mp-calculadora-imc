import { useState } from 'react'

import { InputRadio } from './InputRadio'
import { InputRange } from './InputRange'

import { getIMC, getFormattedWeight, getFormattedHeight, getFormattedWeightInGrams } from '../utils/IMC'

export const Form = ({ setIMC, setIMCRating, setImage }) => {
	const [heightInCentimetris, setHeightInCentimetris] = useState("24");
	const [weightInGrams, setWeightInGrams] = useState("200");

	const heightInMeters = heightInCentimetris / 100;
	const weightInKilograms = weightInGrams / 1000;

  	function handleSubmit(event) {
	    event.preventDefault();

	    const formData = new FormData(event.currentTarget);
	    const form = Object.fromEntries(formData);

	    const IMCData = getIMC(form, weightInKilograms, heightInMeters);

	    setIMC(IMCData.IMCFormated);
	    setImage(IMCData.imgURL);
	    setIMCRating(IMCData.info);
  	}

	return (
		<form className="w-full lg:w-[473px] flex flex-col divide-y divide-[#D6C699]" onSubmit={handleSubmit}>
			<fieldset className="pb-[50px] space-y-[12px]">
				<legend className="text-[28px] text-center lg:text-left font-bold">Escolha o seu sexo:</legend>
				<div className="flex justify-center md:justify-between flex-wrap gap-4 md:gap-0">
				    <InputRadio value="M" avatar="./m.jpg">Masculino</InputRadio>
				    <InputRadio value="F" avatar="./f.jpg">Feminino</InputRadio>
				</div>
			</fieldset>
			<fieldset className="space-y-[26px] pt-[30px]">
				<legend className="sr-only">Defina a sua altura e o seu peso:</legend>
				<div className="flex flex-col">
					<div className="flex justify-between">
						<strong className="text-[28px]">Altura:</strong>
						<strong className="text-[28px]">
							{getFormattedHeight(heightInCentimetris, heightInMeters)}
						</strong>
					</div>
					<InputRange 
						min="24" 
						max="240" 
						name="height" 
						value={heightInCentimetris} 
						setHeightInCentimetris={setHeightInCentimetris}
						step="1"
					/>
					<div className="flex justify-between">
						<span>{heightInCentimetris}cm</span>
						<span>240cm</span>
					</div>
				</div>
				<div className="flex flex-col">
					<div className="flex justify-between">
						<strong className="text-[28px]">Peso:</strong>
						<strong className="text-[28px]">
							{getFormattedWeight(weightInGrams, weightInKilograms)}
						</strong>
					</div>
					<InputRange 
						min="200" 
						max="635000"
						name="weight" 
						value={weightInGrams} 
						setWeightInGrams={setWeightInGrams}
						step="100"
					/>
					<div className="flex justify-between">
						<span>{getFormattedWeightInGrams(weightInGrams)}</span>
						<span>635.000g</span>
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