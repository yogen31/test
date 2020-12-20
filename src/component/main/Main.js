import React from "react";
import "./Main.css";

function Main() {
  const [className, setClassName] = React.useState(false);

  const handleClick = () => {
    setClassName(true);
  };
  return (
    <>
      <nav className="navBar">
        <div className="navBar-item">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
        </div>

        <div className="navBar-item navBar-item2">
          <div
            style={className ? { display: "none" } : { cursor: "pointer" }}
            className={className}
            onClick={handleClick}
          >
            <i className="fa fa-window-close-o " aria-hidden="true"></i>
          </div>
          <div>
            <i className="fa fa-bell-o" aria-hidden="true"></i>
            <i className="fa fa-github margin-x" aria-hidden="true"></i>
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div>
            <span
              class="open"
              style={className ? {} : { display: "none" }}
              onClick={() => {
                setClassName(false);
              }}
            >
              open
            </span>
          </div>
        </div>
      </nav>

      <section className="main">
        <div
          className="main-item "
          style={className ? { border: "0", width: "100%" } : {}}
        >
          One
        </div>
        <div
          className="main-item avinaya"
          style={className ? { display: "none" } : {}}
        >
          Two
        </div>
      </section>
    </>
  );
}

export default Main;
