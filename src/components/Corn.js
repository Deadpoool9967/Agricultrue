import Accordion from 'react-bootstrap/Accordion';
import corn from './images/corn.jpeg';

function Corn() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Corn <span className="text-muted"></span></h2>
            <p className="lead">Corn (Zea mays) is a staple cereal grain known for its sweet and versatile kernels. Growing corn in your garden can be a rewarding experience, and it's a popular addition to summer meals and barbecues. Corn plants are tall and produce ears with rows of kernels, and they require a sunny location with well-drained soil.</p>
            <p className="lead">With proper care, you can enjoy the satisfaction of growing your own corn harvest.</p>
          </div>
          <div className="col-md-5">
            <img src={corn} width="500" height="500" alt="Corn" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Corn requires a lot of sunlight and prefers fertile soil.<br />
              <b>Planting Time:</b><br /> Plant corn seeds directly in the garden after the last frost when the soil has warmed.<br />
              <b>Planting Steps:</b><br />
              1. Plant corn seeds in rows, spacing them about 12 inches apart with rows 30-36 inches apart.
              2. Plant seeds about 1-2 inches deep in well-prepared soil.
              3. Water the soil well after planting and keep it consistently moist.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with a higher nitrogen content.<br />
              <b>Application:</b><br />
              1. Apply fertilizer when the corn plants are about knee-high.
              2. Side-dress with fertilizer when the plants are a foot tall and again when they begin to tassel.
              3. Water the corn well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Corn Growth</Accordion.Header>
            <Accordion.Body>
              <b>Spacing:</b> <br />Plant corn in blocks rather than a single long row to promote better pollination.<br />
              <b>Watering:</b> <br />Provide consistent moisture, especially during the period when the corn is tasseling and forming ears.<br />
              <b>Pollination:</b> <br />Corn is wind-pollinated, so plant it in a way that allows for good air circulation.<br />
              Growing corn can be a fun and satisfying experience, and with proper care, you can enjoy the taste of fresh, homegrown corn.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Corn;
