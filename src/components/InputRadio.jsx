export const InputRadio = ({ children, avatar, value, setSex }) => {

  function handleChange(event) {
    if(event.target.value === 'M') {
      setSex('M');
      return
    }

    setSex('F');
  }

  return (
    <label className="w-[188px] h-[80px] px-[16px] py-[12px] bg-[#FDF7E7] border border-[#04269D] rounded-xl flex items-center gap-[8px] has-[:checked]:bg-[#B8C7FC] cursor-pointer">
      <div>
        <input 
          className="sr-only" 
          type="radio" 
          name="sex" 
          value={value} 
          required 
          onChange={handleChange} 
        />
        <img className="rounded-full" src={avatar} alt="" />
      </div>
      <span className="text-[20px]">{ children }</span>
    </label>
  )
} 