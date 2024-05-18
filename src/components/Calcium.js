import calcium1 from './images/calcium1.jpg';
import calcium2 from './images/calcium2.jpg';
import calcium3 from './images/calcium3.jpg';

function CalciumFertilizers() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Calcium Fertilizers<span className="text-muted"></span></h2>
            <p className="lead">Calcium is an essential nutrient for plant growth, playing a key role in cell wall structure, root development, and overall plant stability. Calcium fertilizers provide plants with this vital element to enhance their structural integrity and promote healthy growth.</p>
          </div>
          <div className="col-md-5">
            <img src={calcium1} width="500" height="500" alt="Calcium Fertilizers" />
          </div>
        </div>
        <br />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Types of Calcium Fertilizers</h2>
            <p className="lead">Different types of calcium fertilizers are available, each with unique characteristics. Here are some common forms:</p>
            <ul>
              <li><b>Calcium Carbonate:</b> Provides calcium and raises soil pH; suitable for acidic soils.</li>
              <li><b>Calcium Nitrate:</b> Contains both calcium and nitrogen; suitable for crops with high calcium requirements.</li>
              <li><b>Calcium Sulfate (Gypsum):</b> Supplies calcium and sulfur; improves soil structure and drainage.</li>
            </ul>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={calcium2} width="500" height="700" alt="Calcium Fertilizers" />
          </div>
        </div>
        <br />

        <div className="row featurette">
          <div className="col-md-7">
            <p className="lead">Calcium fertilizers contribute to the prevention of disorders like blossom end rot in fruits and vegetables. Adequate calcium levels in plants also enhance nutrient uptake, enzyme activation, and overall plant resilience to environmental stressors.</p>
          </div>
          <div className="col-md-5">
            <img src={calcium3} width="500" height="500" alt="Calcium Fertilizers" />
          </div>
        </div>
        <br />
        <p className="lead">Farmers should consider factors such as soil calcium levels, crop requirements, and the specific characteristics of different calcium fertilizers when making application decisions. Regular soil testing and consultation with agricultural experts are recommended for effective calcium management.</p>
      </div>
      <br />
    </>
  );
}

export default CalciumFertilizers;
