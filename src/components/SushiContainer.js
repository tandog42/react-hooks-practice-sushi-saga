import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
function SushiContainer({ eatSushi, sushi, showMore }) {
  console.log(sushi)
  return (
    <div className="belt">
      {sushi.map(sush => (
        <Sushi
        eatSushi={eatSushi}
          key={sush.id}
          sushi={sush}
          name={sush.name}
          img={sush.img_url}
          price={sush.price}
        />
      ))}

      <MoreButton  handleClick={showMore}/>
    </div>
  );
}

export default SushiContainer;
