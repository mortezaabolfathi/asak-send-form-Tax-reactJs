
export const Button = ({ text, type, Click, size , disabled, form}) => {
  return (
    <button className={`btn btn--${type} btn--${size}`} onClick={() => Click()} form={form} disabled={disabled} >
      {text}
    </button>
  );
};

// size=["small","normal","large","free"]
// type=["success","danger","dark","official","gray"]
