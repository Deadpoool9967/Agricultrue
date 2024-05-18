import Accordion from 'react-bootstrap/Accordion';
import cherry from './images/cherry.jpeg';

function Cherry() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Cherry <span className="text-muted"></span></h2>
            <p className="lead">Cherries are delightful and sweet fruits that grow on cherry trees. There are various varieties of cherry trees, including sweet cherries (Prunus avium) and sour cherries (Prunus cerasus). Growing cherry trees in your garden can provide you with fresh and flavorful fruit for eating, baking, and preserving.</p>
            <p className="lead">Cherry trees require specific care, including proper planting, pruning, and pest management. With the right attention, you can enjoy the beauty of cherry blossoms in spring and the delicious taste of cherries in summer.</p>
          </div>
          <div className="col-md-5">
            <img src={cherry} width="500" height="500" alt="Cherry" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Cherry trees prefer slightly acidic to neutral soil.<br />
              <b>Planting Time:</b><br /> Plant cherry trees in the late fall or early spring when the soil is cool.<br />
              <b>Planting Steps:</b><br />
              1. Dig a hole that is as deep as the root ball and twice as wide.
              2. Place the tree in the center of the hole and backfill with soil.
              3. Water the tree thoroughly after planting.
              4. Mulch around the base to retain moisture and suppress weeds.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with a slightly higher ratio of phosphorus for fruit development.<br />
              <b>Application:</b><br />
              1. Apply fertilizer in late winter or early spring before new growth begins.
              2. Repeat applications in late spring and early summer.
              3. Water the tree well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Cherry Tree Growth</Accordion.Header>
            <Accordion.Body>
              <b>Pruning:</b> <br />Prune the tree annually to remove dead or diseased branches and shape it for optimal sunlight exposure.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods and when the fruit is developing.<br />
              <b>Pest and Disease Control:</b> <br />Regularly inspect for pests and diseases, and treat as necessary using suitable methods.<br />
              Growing cherry trees may take some time, but with proper care, you can enjoy the beauty of cherry blossoms and the delicious taste of cherries.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Cherry;
