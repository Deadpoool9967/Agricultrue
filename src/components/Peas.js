import Accordion from 'react-bootstrap/Accordion';
import peas from './images/peas.jpeg';

function Peas() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Peas <span className="text-muted"></span></h2>
            <p className="lead">Peas (Pisum sativum) are delicious and versatile legumes that can be grown in gardens or containers. Whether you enjoy them fresh, frozen, or in soups and salads, growing peas at home allows you to savor their sweet flavor. Peas are cool-season crops, and they prefer well-drained soil with moderate fertility.</p>
            <p className="lead">With proper care, you can harvest tender and flavorful homegrown peas.</p>
          </div>
          <div className="col-md-5">
            <img src={peas} width="500" height="500" alt="Peas" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Peas can tolerate partial shade.<br />
              <b>Planting Time:</b><br /> Plant pea seeds as soon as the soil can be worked in early spring.<br />
              <b>Planting Steps:</b><br />
              1. Prepare the soil by adding compost or well-rotted manure.
              2. Sow pea seeds in rows spaced about 2 feet apart.
              3. Plant seeds 1-2 inches apart, and cover them with 1-2 inches of soil.
              4. Water the soil well after planting and provide support for climbing varieties.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer or add compost to the soil before planting.<br />
              <b>Application:</b><br />
              1. Fertilize the soil before planting with compost or a balanced fertilizer.
              2. Avoid high-nitrogen fertilizers, as peas can fix nitrogen from the air.
              3. Water the pea bed well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Pea Growth</Accordion.Header>
            <Accordion.Body>
              <b>Support:</b> <br />Provide support for climbing pea varieties using stakes, trellises, or pea netting.<br />
              <b>Watering:</b> <br />Keep the soil consistently moist, especially during flowering and pod development.<br />
              <b>Harvesting:</b> <br />Harvest peas when the pods are plump and the peas inside are tender. Pick regularly to encourage continued production.
              Growing peas can be a delightful experience, and with proper care, you can enjoy the sweet taste of freshly harvested peas.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Peas;
