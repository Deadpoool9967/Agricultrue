import Accordion from 'react-bootstrap/Accordion';
import carrot from './images/carrot.jpeg';

function Carrot() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Carrot <span className="text-muted"></span></h2>
            <p className="lead">Carrots (Daucus carota) are root vegetables known for their vibrant color and sweet flavor. They are easy to grow in home gardens and are a great addition to salads, soups, and stir-fries. Carrots prefer cool weather and loose, well-drained soil with good fertility.</p>
            <p className="lead">With proper care, you can harvest your own homegrown carrots.</p>
          </div>
          <div className="col-md-5">
            <img src={carrot} width="500" height="500" alt="Carrot" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with loose, well-drained soil. Carrots prefer soil free from rocks and debris.<br />
              <b>Planting Time:</b><br /> Plant carrot seeds in early spring or late summer, about 2-3 weeks before the last expected frost.<br />
              <b>Planting Steps:</b><br />
              1. Prepare the soil by removing any rocks or debris and loosening it to a depth of at least 12 inches.
              2. Sow carrot seeds thinly in rows spaced about 12-18 inches apart.
              3. Cover the seeds with a thin layer of soil and keep the bed consistently moist until the seeds germinate.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer or well-rotted compost worked into the soil before planting.<br />
              <b>Application:</b><br />
              1. Mix in compost or a balanced fertilizer into the soil before planting to provide nutrients.
              2. Avoid using fresh manure, as it can cause forked or hairy carrots.
              3. Water the carrot bed well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Carrot Growth</Accordion.Header>
            <Accordion.Body>
              <b>Thinning:</b> <br />Thin out carrot seedlings once they have germinated to ensure proper spacing and prevent overcrowding.<br />
              <b>Watering:</b> <br />Keep the soil consistently moist, especially during germination and as the carrots grow.<br />
              <b>Harvesting:</b> <br />Harvest carrots when they reach the desired size, typically 60-80 days after planting. Gently loosen the soil around the carrots and pull them out carefully.
              Growing carrots at home can be a rewarding experience, and with proper care, you can enjoy the freshness of homegrown carrots in your meals.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Carrot;
