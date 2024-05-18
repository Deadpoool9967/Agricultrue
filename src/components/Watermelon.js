import Accordion from 'react-bootstrap/Accordion';
import watermelon from './images/watermelon.jpeg';

function Watermelon() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Watermelon <span className="text-muted"></span></h2>
            <p className="lead">Watermelon (Citrullus lanatus) is a refreshing and delicious fruit known for its juicy, sweet flesh. It belongs to the Cucurbitaceae family and is grown in warm climates worldwide. Watermelon plants are trailing vines with large, lobed leaves and produce large, oblong fruits with a green rind and red or pink interior.</p>
            <p className="lead">Growing watermelons can be a fun and rewarding experience, especially in hot summer months. With proper care, you can enjoy the satisfaction of harvesting your own sweet and hydrating watermelons.</p>
          </div>
          <div className="col-md-5">
            <img src={watermelon} width="500" height="500" alt="Watermelon" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Watermelon plants require warm temperatures.<br />
              <b>Planting Time:</b><br /> Plant watermelon seeds or seedlings after the last frost when the soil has warmed up.<br />
              <b>Planting Steps:</b><br />
              1. Plant seeds or seedlings in hills or rows, with ample spacing between plants.
              2. Water regularly, keeping the soil consistently moist.
              3. Mulch around the plants to retain moisture and suppress weeds.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with a higher ratio of nitrogen for vigorous vine growth.<br />
              <b>Application:</b><br />
              1. Apply fertilizer when the vines start to spread.
              2. Side-dress with fertilizer during the growing season.
              3. Water the plants well after fertilizing.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Watermelon Plant Growth</Accordion.Header>
            <Accordion.Body>
              <b>Spacing:</b> <br />Provide adequate spacing between plants to allow for vine spread and proper fruit development.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during flowering and fruit setting.<br />
              <b>Pollination:</b> <br />Watermelon plants require pollination for fruit development; encourage pollinators or hand-pollinate if needed.<br />
              Growing watermelons may take a few months, but the payoff of juicy, sweet fruits is worth the wait.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Watermelon;
