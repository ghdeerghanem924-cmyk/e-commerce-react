const TopHeader = ({setToggle}) => {
  return (
    <div className="top-header">
      <div onClick={() => setToggle(true)} className="top-header-menu">
        <i className="bi bi-list"></i>
      </div>
      <div className="top-header-logo">
        <i className="bi bi-basket2"></i>
       سوق سوريا 
      </div>
      <div className="top-header-text">اهلا و سهلا </div>
      <div className="top-header-phone">
        0999888777
        <i className="bi bi-telephone"></i>
      </div>
    </div>
  );
};

export default TopHeader;
