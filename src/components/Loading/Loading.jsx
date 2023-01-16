export const Loading = ({ active }) => {
  return (
    <div className={active === true ? "loadingActive" : "loadingDeactive"} >
      <div className="lds-facebook" >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
