
export const Button = ({ text, type, Click, size }) => {
  return (
    <button className={`btn btn--${type} btn--${size}`} onClick={() => Click()}>
      {text}
    </button>
  );
};

// size=["small","normal","large","free"]
// type=["success","danger","dark","official","gray"]
