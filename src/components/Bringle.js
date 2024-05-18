import Accordion from 'react-bootstrap/Accordion';
import brinjal from './images/brinjle.jpeg';

function Brinjal() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Brinjal (Eggplant) <span className="text-muted"></span></h2>
            <p className="lead">Brinjal, also known as eggplant or aubergine, is a warm-season vegetable known for its glossy, purple fruits. It is a versatile ingredient in various cuisines, and growing brinjal in your garden can provide you with fresh and flavorful produce.</p>
            <p className="lead">Brinjal plants are relatively easy to grow, and with proper care, you can enjoy a bountiful harvest of this delicious vegetable.</p>
          </div>
          <div className="col-md-5">
            <img src={brinjal} width="500" height="500" alt="Brinjal" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Brinjal plants prefer slightly acidic to neutral soil.<br />
              <b>Planting Time:</b><br /> Start seeds indoors 6-8 weeks before the last expected frost or plant seedlings outdoors after the last frost.<br />
              <b>Planting Steps:</b><br />
              1. Plant seeds 1/4 inch deep in seed-starting mix or directly sow seedlings in the garden.
              2. Space plants 18-24 inches apart in rows 24-36 inches apart.
              3. Water the soil well after planting and keep it consistently moist.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with a slightly higher ratio of phosphorus for flowering and fruiting.<br />
              <b>Application:</b><br />
              1. Apply fertilizer when planting or mix it into the soil before transplanting.
              2. Side-dress with fertilizer when the plants start to flower.
              3. Water the brinjal plants well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Brinjal Growth</Accordion.Header>
            <Accordion.Body>
              <b>Support:</b> <br />Provide support for the brinjal plants, especially if they are of a larger variety, to prevent bending or breaking.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods and when the fruits are developing.<br />
              <b>Harvesting:</b> <br />Harvest brinjals when they are glossy and firm. Use a sharp knife or pruning shears to cut the fruit from the plant.<br />
              Growing brinjal can be a rewarding experience, and with proper care, you can enjoy this versatile vegetable in various culinary creations.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Brinjal;
