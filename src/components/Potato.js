import Accordion from 'react-bootstrap/Accordion';
import potato from './images/potato.jpeg';

function Potato() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Potato <span className="text-muted"></span></h2>
            <p className="lead">Potatoes (Solanum tuberosum) are versatile and widely consumed tuber vegetables that can be grown in home gardens. Whether you prefer them mashed, roasted, or in soups, growing potatoes allows you to enjoy the freshness of this kitchen staple. Potatoes are cool-season crops, and they thrive in well-drained, loose soil with good fertility.</p>
            <p className="lead">With proper care, you can harvest your own homegrown potatoes.</p>
          </div>
          <div className="col-md-5">
            <img src={potato} width="500" height="500" alt="Potato" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained, loose soil. Potatoes prefer slightly acidic to neutral soil.<br />
              <b>Planting Time:</b><br /> Plant potato tubers in early spring, about two to four weeks before the last expected frost.<br />
              <b>Planting Steps:</b><br />
              1. Cut seed potatoes into pieces, each containing at least one or two "eyes" or buds.
              2. Plant seed potato pieces about 4-6 inches deep in rows spaced about 2-3 feet apart.
              3. Cover the planted potatoes with soil and water well.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer or well-rotted compost worked into the soil before planting.<br />
              <b>Application:</b><br />
              1. Fertilize the soil a few weeks before planting with compost or a balanced fertilizer.
              2. Avoid excessive nitrogen, as it can promote lush foliage but smaller tubers.
              3. Water the potato bed well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Potato Growth</Accordion.Header>
            <Accordion.Body>
              <b>Hilling:</b> <br />As potato plants grow, mound soil around the stems to encourage the development of more tubers.<br />
              <b>Watering:</b> <br />Keep the soil consistently moist, especially during the flowering and tuber development stages.<br />
              <b>Harvesting:</b> <br />Harvest potatoes when the plants have died back. Dig carefully to avoid damaging the tubers.
              Growing potatoes can be a rewarding experience, and with proper care, you can enjoy the satisfaction of harvesting your own homegrown potatoes.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Potato;
