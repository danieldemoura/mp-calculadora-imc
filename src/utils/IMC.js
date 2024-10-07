import homemMagro from '../assets/homem-magro.png'
import homemNormal from '../assets/homem-normal.png'
import homemObeso from '../assets/homem-obeso.png'
import homemObeso2 from '../assets/homem-obeso-2.png'
import mulherMagra from '../assets/mulher-magra.png'
import mulherNormal from '../assets/mulher-normal.png'
import mulherObesa from '../assets/mulher-obesa.png'
import mulherObesa2 from '../assets/mulher-obesa-2.png'

const userLanguage = navigator.language

export const getIMC = (form, weightInKilograms, heightInMeters) => {
	const IMC = (weightInKilograms / (heightInMeters * heightInMeters)).toFixed(2);
    const IMCFormated = String(IMC).padStart(5, '0')

    if(IMC < 17) {
    	return ({
    		info: "Muito abaixo do peso",
    		imgURL: form.sex === 'M' ? homemMagro : mulherMagra,
    		IMCFormated,
    	})

    } else if(IMC < 18.5) {
    	return ({
    		info: "Abaixo do peso",
    		imgURL: form.sex === 'M' ? homemMagro : mulherMagra,
    		IMCFormated,
    	})

    } else if(IMC >= 18.5 && IMC <= 24.9) {
    	return ({
    		info: "Peso normal",
    		imgURL: form.sex === 'M' ? homemNormal: mulherNormal,
    		IMCFormated,
    	})

    } else if(IMC >= 25 && IMC <= 29.9) {
    	return ({
    		info: "Sobrepeso",
    		imgURL: form.sex === 'M' ? homemObeso : mulherObesa,
    		IMCFormated,
    	})

    } else if(IMC >= 30 && IMC <= 34.9) {
      	return ({
    		info: "Obesidade grau 1",
    		imgURL: form.sex === 'M' ? homemObeso : mulherObesa,
    		IMCFormated,
    	})

    } else if(IMC >= 35 && IMC <= 39.9) {
      	return ({
    		info: "Obesidade grau 2",
    		imgURL: form.sex === 'M' ? homemObeso : mulherObesa2,
    		IMCFormated,
    	})

    } else {
      	return ({
    		info: "Obesidade grau 3",
    		imgURL: form.sex === 'M' ? homemObeso : mulherObesa2,
    		IMCFormated,
    	})
    }
}

export const getFormattedIMC = (IMC) => {
	return Intl.NumberFormat(userLanguage).format(IMC)
}

export const getFormattedWeight = (weightInGrams, weightInKilograms) => {
	if(weightInGrams <= 999 ) {
		return weightInGrams + 'g' 
	}

	return weightInKilograms.toFixed(0) + 'kg'
}

export const getFormattedWeightInGrams = (weightInGrams) => {
	return Intl.NumberFormat(userLanguage).format(weightInGrams) + 'g'
}

export const getFormattedHeight = (heightInCentimetris, heightInMeters) => {
	if(heightInCentimetris <= 99) {
		return heightInCentimetris + 'cm'
	}

	return heightInMeters.toLocaleString('pt-br', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}) + 'm'
}