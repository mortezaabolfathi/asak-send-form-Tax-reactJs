
export const Input = ({type, holder, onChange, value, size})=>{
    return(
        <input type={type} placeholder={holder} onChange={onChange} className={`input input--${size}`} value={value} required ></input>
    )
};

