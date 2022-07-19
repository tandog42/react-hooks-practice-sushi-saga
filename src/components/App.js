import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const container_size = 4;
const startingMoney = 100;
function App() {
  const [sushi, setSushi] = useState([]);
  const [sushiStart, setSushiStart] = useState(0);
  const [money, setMoney] = useState(startingMoney);

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then(r => r.json())
      .then(sushis => setSushi(sushis));
  }, []);

  function showMore() {
    setSushiStart(sushiStart + container_size);
  }

  function eatSushi(piece) {
    if(piece.eaten || money - piece.price < 0) {
    return;
    }
    setMoney(money - piece.price);
    setSushi(
      sushi.map(s => (s.id === piece.id ? { ...piece, eaten: true } : s))
    );
  }

  return (
    <div className="app">
      <SushiContainer
        eatSushi={eatSushi}
        showMore={showMore}
        sushi={sushi.slice(sushiStart, sushiStart + container_size)}
      />
      <Table money={money} plates={sushi.filter(p => p.eaten)} />
    </div>
  );
}

export default App;
