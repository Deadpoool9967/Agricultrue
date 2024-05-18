import Accordion from 'react-bootstrap/Accordion';
import grapes from './images/grapes.jpeg';

function Grapes() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Grapes <span className="text-muted"></span></h2>
            <p className="lead">Grapes are small, juicy fruits that grow on vines belonging to the genus Vitis. They are widely cultivated for their use in winemaking, as table grapes, and for drying into raisins. Grapevines are deciduous and can be grown in a variety of climates, making them a versatile and rewarding fruit to cultivate.</p>
            <p className="lead">Growing grapes involves careful attention to the choice of grape variety, soil conditions, and pruning techniques. With proper care, you can enjoy a bounty of delicious grapes for eating, making wine, or drying into raisins.</p>
          </div>
          <div className="col-md-5">
            <img src={grapes} width="500" height="500" alt="Grapes" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Grapes thrive in areas with good air circulation.<br />
              <b>Planting Time:</b><br /> Plant grapevines in the spring when the soil has warmed up, or in the fall before the first frost.<br />
              <b>Planting Steps:</b><br />
              1. Dig a hole large enough to accommodate the roots.
              2. Place the vine in the hole, spread out the roots, and backfill with soil.
              3. Water the vine thoroughly after planting.
              4. Install a trellis or support system for the vines to climb.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with a slightly higher ratio of phosphorus and potassium.<br />
              <b>Application:</b><br />
              1. Apply fertilizer in the spring before the growing season.
              2. Spread the fertilizer evenly around the base of the vines.
              3. Water the vines well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Grapevine Growth</Accordion.Header>
            <Accordion.Body>
              <b>Pruning:</b> <br />Prune grapevines in late winter to remove old wood and shape the plant for optimal fruit production.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods and when the grapes are developing.<br />
              <b>Pest and Disease Control:</b> <br />Regularly inspect for pests and diseases, and treat as necessary using suitable methods.<br />
              Growing grapevines may take a few years, but with proper care, you can enjoy a harvest of delicious grapes for various uses.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Grapes;
