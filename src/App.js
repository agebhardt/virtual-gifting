// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import './Gift.scss';

function Gift(props) {
  const [isOpen, setOpen] = useState(false);
  function toggleGift() {
    setOpen(!isOpen)
  }
  return (
    <div className={isOpen ? 'gift gift--open': 'gift gift--closed'} onClick={toggleGift}>
      <div className="gift-box-body">
        <img src={`gifts/${props.image}`} alt={props.item} />
        <div class="box-lid">
          <div class="box-bowtie"></div>
        </div>
      </div>
    </div>
  );
}

function App() {

  const items = [
    { image: "burp-cloth.png", item: "4pk Meadow Burp Cloth (x2)"},
    { image: "sophie.png", item: "Sophie La Girafe Teething Ring x2"},
    { image: "swaddles.png", item: "SwaddleMe Original Swaddle Wrap Newborn S/M - 2pk"},
    { image: "flannel-blankets.png", item: "Flannel Baby Blankets Floral Fields 4pk"},
    { image: "swaddle-blankets.png", item: "Muslin Swaddle Blankets Floral 3pk"},
    { image: "wubanubs.png", item: "WubbaNub Pacifiers"},
    { image: "mam.png", item: "MAM Mini Air Pacifier 0-6 Months 2pk (x2)"},
    { image: "crinkle-paper.png", item: "Crinkle Baby Paper 2pk"},
    { image: "cups.png", item: "Lamaze Pile & Play Stacking Cups"},
    { image: "brush-set.png", item: "Easy Grip Brush & Comb Set"},
    { image: "sweaters.png", item: "Solid Sweater"},
    { image: "floral-sleep.jpeg", item: "2pk Floral Sleep N' Play"},
    { image: "meadow-bodysuit.jpeg", item: "4pk Meadow Short Sleeve Bodysuit"},
    { image: "rompers.jpeg", item: "2pk Tropical Floral Striped Romper"},
    { image: "meadow-coveralls.jpeg", item: "2pk Meadow Coveralls"},
    { image: "sleen-n-play-3pack.jpeg", item: "Sleep N' Play 3pk"},
    { image: "sleep-n-play-pink.jpeg", item: "Tie-Dye Sleep N' Play 3pk"},
    { image: "fruit-bodysuits.jpeg", item: "4pk Fruit Print Short Sleeve Bodysuit"},
  ]
  return (
    <div className="App">
      <h1>Congratulations, Ha!</h1>
      <div className="gifts">
        {items.map(item => <Gift image={item.image} item={item.item}></Gift>)}
      </div>
    </div>
  );
}

export default App;
