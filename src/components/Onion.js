import Accordion from 'react-bootstrap/Accordion';
import onion from './images/onion.jpeg';

function Onion() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Onion <span className="text-muted"></span></h2>
            <p className="lead">Onions (Allium cepa) are versatile and essential vegetables used in various cuisines worldwide. They come in different varieties, including red, white, and yellow onions. Growing onions at home can be a rewarding experience, and they can be easily cultivated in gardens or containers.</p>
            <p className="lead">Onions are cool-season crops, and with proper care, you can enjoy fresh and flavorful onions for cooking and salads.</p>
          </div>
          <div className="col-md-5">
            <img src={onion} width="500" height="500" alt="Onion" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Onions prefer loose, fertile soil.<br />
              <b>Planting Time:</b><br /> Plant onion sets or seeds in early spring or late fall, depending on your climate.<br />
              <b>Planting Steps:</b><br />
              1. Prepare the soil by adding compost and ensuring good drainage.
              2. Plant onion sets or seeds about 1 inch deep and 4-6 inches apart.
              3. Water the onions well after planting and keep the soil consistently moist.
              4. Mulch around the onions to suppress weeds and retain moisture.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with a slightly higher ratio of phosphorus for root development.<br />
              <b>Application:</b><br />
              1. Apply fertilizer when planting and again when the onions begin to bulb.
              2. Side-dress with fertilizer mid-season if needed.
              3. Water the onions well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Onion Growth</Accordion.Header>
            <Accordion.Body>
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods and when the onions are bulbing.<br />
              <b>Thinning:</b> <br />Thin the onion plants as they grow to ensure proper spacing and larger bulbs.<br />
              <b>Harvesting:</b> <br />Harvest onions when the tops have fallen over, and the bulbs have matured. Cure them in a dry, shaded area before storing.<br />
              Growing onions is relatively straightforward, and with the right care, you can enjoy a bountiful harvest of fresh and flavorful onions.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Onion;
