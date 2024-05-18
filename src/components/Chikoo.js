import Accordion from 'react-bootstrap/Accordion';
import chikoo from './images/chikoo.jpeg';

function Chikoo() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Chikoo (Sapodilla) <span className="text-muted"></span></h2>
            <p className="lead">Chikoo, also known as sapodilla (Manilkara zapota), is a sweet and flavorful fruit that grows on an evergreen tree native to Central America. It is cultivated for its delicious, brown, and grainy-textured fruit. Chikoo trees are well-suited for tropical and subtropical regions, and they produce sweet and juicy fruits with a unique taste.</p>
            <p className="lead">Growing chikoo involves providing the right conditions, including well-drained soil and warm temperatures. With proper care, you can enjoy the delightful taste of chikoo right from your own tree.</p>
          </div>
          <div className="col-md-5">
            <img src={chikoo} width="500" height="500" alt="Chikoo" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Chikoo trees thrive in tropical and subtropical climates.<br />
              <b>Planting Time:</b><br /> Plant chikoo trees in the spring or early summer when the soil is warm.<br />
              <b>Planting Steps:</b><br />
              1. Dig a hole that is twice as wide and deep as the root ball.
              2. Place the tree in the center of the hole and fill it with soil.
              3. Water the tree thoroughly after planting.
              4. Mulch around the base to retain moisture and suppress weeds.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with a slightly higher ratio of potassium for fruit development.<br />
              <b>Application:</b><br />
              1. Apply fertilizer in the spring before the growing season.
              2. Spread the fertilizer evenly around the drip line of the tree.
              3. Water the tree well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Chikoo Tree Growth</Accordion.Header>
            <Accordion.Body>
              <b>Pruning:</b> <br />Prune the tree to remove dead or crowded branches and shape it for optimal fruit production.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods and when the fruit is developing.<br />
              <b>Pest and Disease Control:</b> <br />Regularly inspect for pests and diseases, and treat as necessary using suitable methods.<br />
              Growing chikoo trees may take some time, but the reward of sweet and flavorful fruits is worth the effort.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Chikoo;
