export const InputRange = ({ value, setHeightInCentimetris, setWeight, ...props }) => {

	function handleRange(event) {
	    if(event.target.name === 'height') {
	      setHeightInCentimetris(event.target.value);
	      return
	    }

	    setWeight(event.target.value);
  	}

	return (
		<input 
			className="w-full" 
			type="range"  
			step="1" 
			value={value}
			onChange={handleRange}
			required
			{...props}
		/>
	)
}