
export const Input = ({type, holder, onChange, value})=>{
    return(
        <input type={type} placeholder={holder} onChange={onChange} className='input' value={value} required ></input>
    )
};

