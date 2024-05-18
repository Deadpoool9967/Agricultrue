import Accordion from 'react-bootstrap/Accordion';
import mango from './images/mango.jpeg';

function Mango() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Mango <span className="text-muted"></span></h2>
            <p className="lead">The mango (Mangifera indica) is a tropical fruit known for its sweet and juicy flesh. It is native to South Asia but is now grown in many tropical and subtropical regions around the world. Mango trees are evergreen and are appreciated not only for their delicious fruit but also for their shade and ornamental value.</p>
            <p className="lead">Growing mango trees can be a rewarding experience, but it requires a warm climate and well-drained soil. With proper care, mango trees can bear fruit for many years, providing a bounty of tasty mangoes.</p>
          </div>
          <div className="col-md-5">
            <img src={mango} width="500" height="500" alt="Mango" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Mango trees thrive in tropical climates.<br />
              <b>Planting Time:</b><br /> Plant mango trees in the spring or early summer when the weather is warm.<br />
              <b>Planting Steps:</b><br />
              1. Dig a hole larger than the root ball.
              2. Place the tree in the center of the hole, ensuring the roots are well-spread.
              3. Backfill the hole with soil and water thoroughly.
              4. Mulch around the base to retain moisture and suppress weeds.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with micronutrients, preferably formulated for fruit trees.<br />
              <b>Application:</b><br />
              1. Apply fertilizer in the growing season.
              2. Spread the fertilizer evenly around the drip line of the tree.
              3. Water the tree well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Mango Tree Growth</Accordion.Header>
            <Accordion.Body>
              <b>Pruning:</b> <br />Prune the tree to remove dead or crowded branches and shape it for optimal sunlight exposure.<br />
              <b>Watering:</b> <br />Keep the soil consistently moist, especially during the flowering and fruiting stages.<br />
              <b>Pest and Disease Control:</b> <br />Regularly inspect for pests and diseases, and treat as necessary using suitable methods.<br />
              Growing mango trees may take some time, but the reward of delicious mangoes is worth the effort.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Mango;
