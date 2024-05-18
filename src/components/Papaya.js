import Accordion from 'react-bootstrap/Accordion';
import papaya from './images/papaya.jpeg';

function Papaya() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Papaya <span className="text-muted"></span></h2>
            <p className="lead">Papaya (Carica papaya) is a tropical fruit known for its sweet and vibrant orange flesh. It grows on a fast-growing, short-lived tree that thrives in warm climates. Papaya trees are appreciated not only for their delicious fruit but also for their ornamental value and potential health benefits.</p>
            <p className="lead">Growing papayas involves providing the right conditions, including well-drained soil and plenty of sunlight. With proper care, you can enjoy a continuous harvest of juicy papayas.</p>
          </div>
          <div className="col-md-5">
            <img src={papaya} width="500" height="500" alt="Papaya" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Papaya trees thrive in tropical and subtropical climates.<br />
              <b>Planting Time:</b><br /> Plant papaya seeds or seedlings in the spring or early summer.<br />
              <b>Planting Steps:</b><br />
              1. Dig a hole that is twice as wide and deep as the root ball.
              2. Place the seedling or seeds in the hole and backfill with soil.
              3. Water the tree thoroughly after planting.
              4. Mulch around the base to retain moisture and suppress weeds.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with a slightly higher ratio of nitrogen for vigorous growth.<br />
              <b>Application:</b><br />
              1. Apply fertilizer in the spring before the growing season.
              2. Repeat applications every 2-3 months during the growing season.
              3. Water the tree well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Papaya Tree Growth</Accordion.Header>
            <Accordion.Body>
              <b>Pruning:</b> <br />Prune the tree to remove dead or damaged branches and encourage a strong central stem.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods and when the fruit is developing.<br />
              <b>Pest and Disease Control:</b> <br />Regularly inspect for pests and diseases, and treat as necessary using suitable methods.<br />
              Growing papaya trees is relatively fast, and with proper care, you can enjoy a continuous supply of delicious and nutritious papayas.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Papaya;
