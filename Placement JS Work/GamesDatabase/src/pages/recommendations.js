import React from "react";
import Page from "../components/Page";

export default () => {
    const [genre, setGenre] = React.useState("");
    const [ageRating, setAgeRating] = React.useState("");
    const [priceRangeMin, setPriceRangeMin] = React.useState("");
    const [priceRangeMax, setPriceRangeMax] = React.useState("");

  const submitForm = () => {
    alert(genre);
  };
  return (
    <Page>
      <div className="title">
        <h1>Recommendations</h1>
        <body>
            <div class="data">
                <label>Genre</label>
                <input type="text" id="genre" value={genre} onChange={e => { setGenre(e.target.value); }}/>
                    <br></br>
                <label>Age rating</label>
                <input type="text" id="ageRating" value={ageRating} onChange={e => { setAgeRating(e.target.value); }}/>
                    <br></br>
                <label>Price range</label>
                <input type="text" id="priceRangeMin" value={priceRangeMin} onChange={e => { setPriceRangeMin(e.target.value); }}/>
                :
                <input type="text" id="priceRangeMax" value={priceRangeMax} onChange={e => { setPriceRangeMax(e.target.value); }}/>
                    <br></br>
                <button className="findGame" onClick={submitForm}>Find Games</button>
            </div>
        </body>
      </div>
    </Page>
  );
};
