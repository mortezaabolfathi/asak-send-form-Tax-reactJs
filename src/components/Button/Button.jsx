
export const Button = ({ text, type, Click, size , disabled}) => {
  return (
    <button className={`btn btn--${type} btn--${size}`} onClick={() => Click()} disabled={disabled} >
      {text}
    </button>
  );
};

// size=["small","normal","large","free"]
// type=["success","danger","dark","official","gray"]
