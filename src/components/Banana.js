import Accordion from 'react-bootstrap/Accordion';
import banana from './images/banana.jpeg';

function Banana() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Banana <span className="text-muted"></span></h2>
            <p className="lead">A banana is an elongated, edible fruit produced by various large herbaceous plants in the genus Musa. The sweet and nutritious fruit is a staple in many tropical regions. Bananas come in a variety of sizes and colors, and they are typically consumed when ripe.</p>
            <p className="lead">Banana plants are known for their large, paddle-shaped leaves and are classified as herbaceous perennials. They are cultivated in tropical and subtropical regions and are a significant food source for millions of people worldwide.</p>
          </div>
          <div className="col-md-5">
            <img src={banana} width="500" height="500" alt="Banana" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a location with well-drained soil and plenty of sunlight. Bananas thrive in tropical climates.<br />
              <b>Planting Time:</b><br /> Plant banana plants in the spring or early summer for optimal growth.<br />
              <b>Planting Steps:</b><br />
              1. Dig a hole deep enough to accommodate the root ball.<br />
              2. Place the plant in the hole and backfill with soil.<br />
              3. Water the plant thoroughly.<br />
              4. Mulch around the base to conserve moisture and suppress weeds.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced, slow-release fertilizer with a higher potassium content.<br />
              <b>Application:</b><br />
              1. Apply fertilizer in the growing season every 2-3 months.<br />
              2. Spread the fertilizer evenly around the base of the plant.<br />
              3. Water the plant well after applying fertilizer.<br />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Banana Plant Growth</Accordion.Header>
            <Accordion.Body>
              <b>Pruning:</b> <br />Remove dead or damaged leaves regularly to promote air circulation.<br />
              <b>Watering:</b> <br />Keep the soil consistently moist, especially during dry periods.<br />
              <b>Pest and Disease Control:</b> <br />Monitor for pests and diseases, and take prompt action using appropriate measures.<br />
              Growing banana plants may take some time, but with proper care, you can enjoy a tropical harvest of delicious bananas.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Banana;
