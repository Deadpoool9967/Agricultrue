import phosphorus1 from './images/phosphorus1.jpg';
import phosphorus2 from './images/phosphorus2.jpg';
import phosphorus3 from './images/phosphorus3.png';

function PhosphorusFertilizers() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Phosphorus Fertilizers<span className="text-muted"></span></h2>
            <p className="lead">Phosphorus is an essential nutrient for plant growth, playing a crucial role in processes like energy transfer, root development, and flowering. Phosphorus fertilizers provide plants with this vital nutrient to support their overall health and productivity.</p>
          </div>
          <div className="col-md-5">
            <img src={phosphorus1} width="500" height="500" alt="Phosphorus Fertilizers" />
          </div>
        </div>
        <br />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Types of Phosphorus Fertilizers</h2>
            <p className="lead">There are different types of phosphorus fertilizers with varying characteristics. Here are some common forms:</p>
            <ul>
              <li><b>Superphosphate:</b> Contains a higher concentration of phosphorus and is quickly available to plants.</li>
              <li><b>Triple Superphosphate:</b> Provides a high level of phosphorus and is suitable for crops with high phosphorus requirements.</li>
              <li><b>Diammonium Phosphate (DAP):</b> Contains both nitrogen and phosphorus, making it a popular choice for various crops.</li>
            </ul>
          </div>
          <div className="col-md-5 order-md-1">
            <img src={phosphorus2} width="500" height="700" alt="Phosphorus Fertilizers" />
          </div>
        </div>
        <br />

        <div className="row featurette">
          <div className="col-md-7">
            <p className="lead">Phosphorus fertilizers play a critical role in supporting root development, early plant growth, and the formation of flowers and fruits. Proper application of phosphorus fertilizers is essential for maximizing crop yields and ensuring the overall nutritional balance of plants.</p>
          </div>
          <div className="col-md-5">
            <img src={phosphorus3} width="500" height="500" alt="Phosphorus Fertilizers" />
          </div>
        </div>
        <br />
        <p className="lead">Farmers should consider factors such as soil phosphorus levels, crop requirements, and the specific characteristics of different phosphorus fertilizers when making application decisions. Regular soil testing and consultation with agricultural experts are recommended for effective phosphorus management.</p>
      </div>
      <br />
    </>
  );
}

export default PhosphorusFertilizers;
