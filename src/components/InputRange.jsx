export const InputRange = ({ value, setHeightInCentimetris, setWeightInGrams, ...props }) => {

	function handleRange(event) {
	    if(event.target.name === 'height') {
	      setHeightInCentimetris(event.target.value);
	      return
	    }

	    setWeightInGrams(event.target.value);
  	}

	return (
		<input 
			className="w-full" 
			type="range"  
			value={value}
			onChange={handleRange}
			required
			{...props}
		/>
	)
}