import Accordion from 'react-bootstrap/Accordion';
import dragonfruit from './images/dragonfruit.jpeg';

function DragonFruit() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Dragon Fruit (Pitaya) <span className="text-muted"></span></h2>
            <p className="lead">Dragon fruit, also known as pitaya, is a unique and exotic fruit that comes from the climbing cacti of the genus Hylocereus. It is known for its vibrant, dragon-like appearance and sweet, refreshing taste. Growing dragon fruit is relatively easy, and it can be a fascinating addition to your garden.</p>
            <p className="lead">Dragon fruit plants thrive in warm and tropical climates, and they are well-suited for both outdoor and indoor cultivation. With proper care, you can enjoy the beauty of dragon fruit flowers and harvest delicious fruits.</p>
          </div>
          <div className="col-md-5">
            <img src={dragonfruit} width="500" height="500" alt="Dragon Fruit" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Dragon fruit plants prefer slightly acidic to neutral soil.<br />
              <b>Planting Time:</b><br /> Plant dragon fruit cuttings in the spring or early summer.<br />
              <b>Planting Steps:</b><br />
              1. Prepare a well-draining planting site or container.
              2. Plant the dragon fruit cutting vertically with one-third of the cutting below the soil.
              3. Water the cutting lightly and gradually increase watering as it establishes.
              4. Provide a sturdy support structure for the climbing vines.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with a slightly higher ratio of phosphorus for flowering and fruiting.<br />
              <b>Application:</b><br />
              1. Apply fertilizer in late winter or early spring before new growth begins.
              2. Repeat applications every 4-6 weeks during the growing season.
              3. Water the plant well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Dragon Fruit Growth</Accordion.Header>
            <Accordion.Body>
              <b>Support:</b> <br />Provide a trellis or support structure for the climbing vines to grow and produce fruit.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods and when the plant is flowering and fruiting.<br />
              <b>Harvesting:</b> <br />Harvest dragon fruit when the skin color changes and the fruit gives slightly to gentle pressure.<br />
              Growing dragon fruit can be a rewarding experience, and with proper care, you can enjoy the unique and delicious fruits.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default DragonFruit;
