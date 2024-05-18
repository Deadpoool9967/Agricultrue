import Accordion from 'react-bootstrap/Accordion';
import kiwi from './images/kiwi.jpeg';

function Kiwi() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Kiwi <span className="text-muted"></span></h2>
            <p className="lead">Kiwi, also known as kiwifruit or Chinese gooseberry (Actinidia deliciosa), is a flavorful and nutrient-rich fruit that grows on deciduous vines. Kiwi vines are known for their heart-shaped, fuzzy fruits with vibrant green flesh and tiny black seeds. They are native to China but are now cultivated in various regions with suitable climates.</p>
            <p className="lead">Growing kiwi involves providing the right conditions, including well-drained soil and a sunny location. With proper care, you can enjoy the unique taste and nutritional benefits of homegrown kiwi.</p>
          </div>
          <div className="col-md-5">
            <img src={kiwi} width="500" height="500" alt="Kiwi" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Kiwi vines prefer a slightly acidic to neutral soil pH.<br />
              <b>Planting Time:</b><br /> Plant kiwi vines in the spring or early fall when the soil is workable.<br />
              <b>Planting Steps:</b><br />
              1. Dig a hole that is twice as wide and deep as the root ball.
              2. Place the vine in the hole and backfill with soil.
              3. Water the vine thoroughly after planting.
              4. Provide a sturdy trellis or support structure for the vines to climb.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with a slightly higher ratio of potassium for fruit development.<br />
              <b>Application:</b><br />
              1. Apply fertilizer in the spring before new growth begins.
              2. Repeat applications in late spring and early summer.
              3. Water the vines well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Kiwi Vine Growth</Accordion.Header>
            <Accordion.Body>
              <b>Pruning:</b> <br />Prune the vines in late winter to remove dead or crowded branches and shape them for optimal fruit production.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods and when the fruit is developing.<br />
              <b>Pollination:</b> <br />Kiwi vines are dioecious, meaning they have separate male and female plants. Plant both for pollination and fruiting.<br />
              Growing kiwi vines may take a few years, but with proper care, you can enjoy the unique and delicious fruits.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Kiwi;
