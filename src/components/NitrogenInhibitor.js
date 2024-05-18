import nitrogenInhibitor1 from './images/nitrogenin.jpg';
import nitrogenInhibitor2 from './images/nitrogenin1.png';
import nitrogenInhibitor3 from './images/nitrogenin2.webp';

function NitrogenInhibitorFertilizers() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Nitrogen Fertilizers with Inhibitors<span className="text-muted"></span></h2>
            <p className="lead">Nitrogen fertilizers with inhibitors are designed to enhance nitrogen use efficiency and reduce environmental impact by minimizing nitrogen losses. These inhibitors slow down certain processes associated with nitrogen fertilizers, such as nitrification and volatilization, ensuring that nitrogen is utilized more effectively by plants.</p>
          </div>
          <div className="col-md-5">
            <img src={nitrogenInhibitor1} width="500" height="500" alt="Nitrogen Fertilizers with Inhibitors" />
          </div>
        </div>
        <br />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Types of Nitrogen Inhibitors</h2>
            <p className="lead">There are different types of inhibitors used in nitrogen fertilizers to mitigate nitrogen losses. Here are some common types:</p>
            <ul>
              <li><b>Nitrification Inhibitors:</b> Slow down the conversion of ammonium to nitrate, reducing nitrogen leaching.</li>
              <li><b>Urease Inhibitors:</b> Reduce ammonia volatilization by slowing down the hydrolysis of urea.</li>
              <li><b>Nitrogen Stabilizers:</b> Improve nitrogen retention in the soil and prevent losses through denitrification.</li>
            </ul>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={nitrogenInhibitor2} width="500" height="700" alt="Nitrogen Fertilizers with Inhibitors" />
          </div>
        </div>
        <br />

        <div className="row featurette">
          <div className="col-md-7">
            <p className="lead">The use of nitrogen fertilizers with inhibitors provides benefits such as increased nutrient use efficiency, reduced environmental impact, and improved crop yields. Farmers should consider factors like soil conditions, climate, and crop types when choosing and applying these fertilizers.</p>
          </div>
          <div className="col-md-5">
            <img src={nitrogenInhibitor3} width="500" height="500" alt="Nitrogen Fertilizers with Inhibitors" />
          </div>
        </div>
        <br />
        <p className="lead">As with any fertilizer, proper soil testing and consultation with agricultural experts are essential to determine the specific nitrogen needs of crops and to implement sustainable farming practices.</p>
      </div>
      <br />
    </>
  );
}

export default NitrogenInhibitorFertilizers;
