import React from "react";

function Sushi({eatSushi, name, img,  price, sushi}) {
  return (
    <div className="sushi">
      <div className="plate" onClick={() => eatSushi(sushi)}>
        
        {sushi.eaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
