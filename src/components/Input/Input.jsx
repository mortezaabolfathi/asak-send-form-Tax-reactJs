
export const Input = ({type, holder, onChange, value, size, name})=>{
    return(
        <input type={type} placeholder={holder} onChange={onChange} className={`input input--${size}`} value={value} name={name} required ></input>
    )
};

