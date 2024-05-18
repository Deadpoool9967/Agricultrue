import Accordion from 'react-bootstrap/Accordion';
import lemon from './images/lemon.jpeg';

function Lemon() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Lemon <span className="text-muted"></span></h2>
            <p className="lead">Lemon trees (Citrus limon) are evergreen plants known for their fragrant flowers and tart, yellow fruits. Growing lemons at home can provide you with fresh and flavorful citrus for culinary use, beverages, and more. Lemon trees are well-suited for container gardening, making them adaptable to various climates.</p>
            <p className="lead">With proper care, you can enjoy the beauty of lemon trees and harvest your own homegrown lemons.</p>
          </div>
          <div className="col-md-5">
            <img src={lemon} width="500" height="500" alt="Lemon" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Lemon trees thrive in warm climates.<br />
              <b>Planting Time:</b><br /> Plant lemon trees in spring or early fall when the soil is warm.<br />
              <b>Planting Steps:</b><br />
              1. Dig a hole twice as wide as the root ball and the same depth.
              2. Place the lemon tree in the center of the hole, ensuring it sits at the same depth as it was in the nursery container.
              3. Backfill the hole with soil and water well.
              4. Mulch around the base of the tree to retain moisture and suppress weeds.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer formulated for citrus trees.<br />
              <b>Application:</b><br />
              1. Fertilize lemon trees in spring before new growth begins.
              2. Apply fertilizer again in late spring and early summer.
              3. Water the tree well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Lemon Tree Growth</Accordion.Header>
            <Accordion.Body>
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods. Water deeply but allow the soil to dry out between watering.<br />
              <b>Pruning:</b> <br />Prune lemon trees to remove dead or diseased branches and shape the tree for optimal sunlight exposure.<br />
              <b>Pest Control:</b> <br />Monitor for pests such as aphids and scale. Use natural or chemical controls as needed.<br />
              Growing lemon trees can be a delightful experience, and with the right care, you can enjoy the beauty of the tree and harvest fresh lemons for various uses.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Lemon;
