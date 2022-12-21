
export const Button = ({ text, type, Click, size }) => {
  return (
    <button className={`btn btn--${type} btn--${size}`} onClick={() => Click()}>
      {text}
    </button>
  );
};

