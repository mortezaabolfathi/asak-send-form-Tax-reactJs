import propTypes from "prop-types";

export const Loading  = ({ type }) => {
  return (
    <>
      {type === "spiner" ? (
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : type === "grid" ? (
        <div className="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : type === "ripple" ? (
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};


Loading.propTypes = {type:propTypes.oneOf(["spiner", "grid", "ripple"])} 