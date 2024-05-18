import Accordion from 'react-bootstrap/Accordion';
import apple from './images/apple.jpeg';

function Apple() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Apple <span className="text-muted"></span></h2>
            <p className="lead">Apples (Malus spp.) are popular and widely cultivated fruits known for their crisp texture and sweet flavor. They are grown on apple trees in orchards and home gardens around the world. Apples come in a variety of colors and flavors, and they can be eaten fresh, cooked into desserts, or pressed for juice.</p>
            <p className="lead">With proper care, you can grow your own apples and enjoy the freshness of homegrown fruit.</p>
          </div>
          <div className="col-md-5">
            <img src={apple} width="500" height="500" alt="Apple" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Apple trees prefer slightly acidic to neutral soil.<br />
              <b>Planting Time:</b><br /> Plant apple trees in late winter or early spring when the soil is workable and not frozen.<br />
              <b>Planting Steps:</b><br />
              1. Dig a hole twice as wide as the root ball.
              2. Place the tree in the center of the hole, making sure the roots are spread out.
              3. Fill the hole with soil and water thoroughly.
              4. Mulch around the base of the tree to retain moisture.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Utilize a balanced, slow-release fertilizer with a ratio such as 10-10-10.<br />
              <b>Application:</b><br />
              1. Apply fertilizer in early spring before new growth begins.
              2. Spread the fertilizer evenly around the drip line of the tree.
              3. Water the tree well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Apple Tree Growth</Accordion.Header>
            <Accordion.Body>
              <b>Pruning:</b> <br />Conduct annual pruning to remove dead or diseased branches and shape the tree for optimal sunlight exposure.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods, while avoiding waterlogged conditions.<br />
              <b>Pest and Disease Control:</b> <br />Regularly monitor for pests and diseases, employing organic or chemical controls as needed.<br />
              Growing apple trees requires patience, as it may take several years before they produce a significant amount of fruit. However, with diligent care, you can anticipate a bountiful harvest of crisp and flavorful apples.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Apple;
