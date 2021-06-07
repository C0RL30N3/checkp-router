import React from "react";
import ReactStars from "react-rating-stars-component";
import "./style.css";

const Filter = ({ searchbytitle, searchbyrate }) => {
  const ratingstarts = {
    size: 80,
    count: 5,
    isHalf: false,
    value: 0,
    color: "white",
    activeColor: "gold",
    onChange: (newvalue) => {
      searchbyrate(newvalue);
    },
  };

  return (
    <div>
    <div
      style={{ fontSize: 16, padding: 40 }}
    >
      <form className="search">
        <div className="searchingalign" style={{}}>
          <label className="titlelabel" style={{fontSize:'60px',color:'gold'}}> Filter By Title </label>
          <input
            className="searchingform"
            type="text"
            placeholder="search here..."
            onChange={(e) => searchbytitle(e.target.value)}
            style={{borderRadius:'30px',width:'600px',height:'100px',backgroundColor:'transparent'}}
          />
        </div>
        <div className="ratingalign">
          
          <span className="stars">
            <ReactStars {...ratingstarts} />
          </span>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Filter;
