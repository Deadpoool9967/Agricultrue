import nitrogen1 from './images/nitrogen1.png';
import nitrogen2 from './images/nitrogen2.jpg';
import nitrogen3 from './images/nitrogen3.jpg';

function NitrogenFertilizers() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Nitrogen Fertilizers<span className="text-muted"></span></h2>
            <p className="lead">Nitrogen is a crucial element for plant growth, and nitrogen fertilizers provide this essential nutrient to promote healthy plant development. These fertilizers play a key role in supporting vegetative growth, leaf formation, and overall plant vigor.</p>
          </div>
          <div className="col-md-5">
            <img src={nitrogen1} width="500" height="500" alt="Nitrogen Fertilizers" />
          </div>
        </div>
        <br />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Types of Nitrogen Fertilizers</h2>
            <p className="lead">There are various types of nitrogen fertilizers, each with its own characteristics and uses. Here are some common forms:</p>
            <ul>
              <li><b>Urea:</b> A widely used nitrogen fertilizer that releases nitrogen as plants require it.</li>
              <li><b>Ammonium Nitrate:</b> A water-soluble fertilizer with quick-release nitrogen.</li>
              <li><b>Ammonium Sulfate:</b> Provides nitrogen and sulfur; suitable for alkaline soils.</li>
              <li><b>Anhydrous Ammonia:</b> A gas that converts to ammonium in the soil; used for direct soil application.</li>
            </ul>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={nitrogen2} width="500" height="700" alt="Nitrogen Fertilizers" />
          </div>
        </div>
        <br />

        <div className="row featurette">
          <div className="col-md-7">
            <p className="lead">Nitrogen fertilizers are crucial for enhancing crop yields, but their application requires careful consideration. Overuse can lead to environmental issues, such as water pollution and greenhouse gas emissions. It's essential for farmers to follow recommended application rates, consider soil conditions, and adopt practices that promote efficient nitrogen use.</p>
          </div>
          <div className="col-md-5">
            <img src={nitrogen3} width="500" height="500" alt="Nitrogen Fertilizers" />
          </div>
        </div>
        <br />
        <p className="lead">As with any fertilizer, proper soil testing and consultation with agricultural experts are essential to determine the specific nitrogen needs of crops and to implement sustainable farming practices.</p>
      </div>
      <br />
    </>
  );
}

export default NitrogenFertilizers;
