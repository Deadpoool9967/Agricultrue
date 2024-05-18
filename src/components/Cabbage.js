import Accordion from 'react-bootstrap/Accordion';
import cabbage from './images/cabbage.jpeg';

function Cabbage() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Cabbage <span className="text-muted"></span></h2>
            <p className="lead">Cabbage (Brassica oleracea var. capitata) is a versatile and nutritious vegetable that can be grown in home gardens. Whether you enjoy it raw in salads, cooked in stir-fries, or fermented as sauerkraut, growing cabbage allows you to enjoy this cruciferous vegetable at its freshest. Cabbage is a cool-season crop, and it prefers well-drained soil with good fertility.</p>
            <p className="lead">With proper care, you can harvest crisp and flavorful homegrown cabbage.</p>
          </div>
          <div className="col-md-5">
            <img src={cabbage} width="500" height="500" alt="Cabbage" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Cabbage prefers slightly acidic to neutral soil.<br />
              <b>Planting Time:</b><br /> Start cabbage seeds indoors 6-8 weeks before the last expected frost, or direct sow seeds in early spring or late summer.<br />
              <b>Planting Steps:</b><br />
              1. Plant cabbage seeds in seed trays or small pots, keeping them well-lit and warm.
              2. Transplant seedlings into the garden when they are 4-6 weeks old, spacing them about 12-18 inches apart.
              3. Water the soil well after transplanting.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer or add well-rotted compost to the soil before planting.<br />
              <b>Application:</b><br />
              1. Fertilize the soil before planting with compost or a balanced fertilizer.
              2. Side-dress with fertilizer when the cabbage heads begin to form.
              3. Water the cabbage plants regularly.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Cabbage Growth</Accordion.Header>
            <Accordion.Body>
              <b>Protection:</b> <br />Protect young cabbage plants from cabbage worms using row covers or organic insecticides.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, and water the plants at the base to avoid wetting the foliage.
              <b>Harvesting:</b> <br />Harvest cabbage when the heads feel firm to the touch. Cut the heads at the base with a sharp knife.
              Growing cabbage can be a rewarding experience, and with proper care, you can enjoy the freshness of homegrown cabbage in your meals.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Cabbage;
