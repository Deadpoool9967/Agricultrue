import Accordion from 'react-bootstrap/Accordion';
import orange from './images/orange.jpeg';

function Orange() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Orange <span className="text-muted"></span></h2>
            <p className="lead">Oranges are citrus fruits that are not only delicious but also rich in vitamin C. Orange trees (Citrus sinensis) are evergreen trees that thrive in warm climates. They are known for their fragrant white flowers and bright orange fruits. Growing orange trees can be a rewarding experience, allowing you to enjoy fresh, juicy oranges right from your garden.</p>
            <p className="lead">Providing the right conditions, such as well-drained soil and plenty of sunlight, is essential for the successful growth of orange trees. With proper care, you can enjoy a bountiful harvest of sweet and nutritious oranges.</p>
          </div>
          <div className="col-md-5">
            <img src={orange} width="500" height="500" alt="Orange" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Orange trees prefer slightly acidic to neutral soil.<br />
              <b>Planting Time:</b><br /> Plant orange trees in the spring or early fall when the soil is warm.<br />
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
              <b>Type:</b> <br />Use a balanced fertilizer with a higher ratio of nitrogen for healthy foliage and fruit development.<br />
              <b>Application:</b><br />
              1. Apply fertilizer in late winter or early spring before new growth begins.
              2. Repeat applications in late spring and early summer.
              3. Water the tree well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Orange Tree Growth</Accordion.Header>
            <Accordion.Body>
              <b>Pruning:</b> <br />Prune the tree to remove dead or crowded branches and shape it for optimal sunlight exposure.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods and when the fruit is developing.<br />
              <b>Pest and Disease Control:</b> <br />Regularly inspect for pests and diseases, and treat as necessary using suitable methods.<br />
              Growing orange trees may take some time, but with proper care, you can enjoy the delightful taste of fresh oranges from your own tree.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Orange;
