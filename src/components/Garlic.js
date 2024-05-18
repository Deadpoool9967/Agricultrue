import Accordion from 'react-bootstrap/Accordion';
import garlic from './images/garlic.jpeg';

function Garlic() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Garlic <span className="text-muted"></span></h2>
            <p className="lead">Garlic (Allium sativum) is a flavorful and aromatic bulb that is a staple in many cuisines. Growing garlic at home is a rewarding experience, and it can be planted in the fall for a spring or summer harvest. Garlic is known for its culinary uses, as well as its potential health benefits.</p>
            <p className="lead">With proper care, you can enjoy the robust flavor of homegrown garlic in your dishes.</p>
          </div>
          <div className="col-md-5">
            <img src={garlic} width="500" height="500" alt="Garlic" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Garlic prefers loose, fertile soil with good drainage.<br />
              <b>Planting Time:</b><br /> Plant garlic cloves in the fall, a few weeks before the first hard frost.<br />
              <b>Planting Steps:</b><br />
              1. Separate garlic bulbs into individual cloves, leaving the papery skin intact.
              2. Plant cloves 2-4 inches deep and about 6 inches apart in rows spaced 12-18 inches apart.
              3. Water the soil well after planting and mulch to conserve moisture and suppress weeds.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer or add compost to the soil before planting.<br />
              <b>Application:</b><br />
              1. Fertilize in the fall before planting with well-rotted compost.
              2. Avoid excessive nitrogen, as it can lead to lush foliage but smaller bulbs.
              3. Water the garlic well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Garlic Growth</Accordion.Header>
            <Accordion.Body>
              <b>Mulching:</b> <br />Mulch the garlic bed to insulate the soil and suppress weeds.<br />
              <b>Watering:</b> <br />Keep the soil consistently moist, especially in the early stages of growth.
              <b>Harvesting:</b> <br />Harvest garlic when the tops begin to yellow and fall over. Allow bulbs to cure in a dry, well-ventilated place.
              Growing garlic is a simple yet satisfying process, and with proper care, you can enjoy the rich, savory taste of homegrown garlic in your culinary creations.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Garlic;
