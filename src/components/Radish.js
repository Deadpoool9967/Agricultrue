import Accordion from 'react-bootstrap/Accordion';
import radish from './images/radish.jpeg';

function Radish() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Radish <span className="text-muted"></span></h2>
            <p className="lead">Radishes (Raphanus sativus) are fast-growing and crisp root vegetables known for their peppery flavor. They come in various shapes, sizes, and colors, making them a popular choice for home gardens. Growing radishes is relatively easy, and they are a great addition to salads, sandwiches, and snacks.</p>
            <p className="lead">Radishes are cool-season crops, and with the right care, you can enjoy a quick and satisfying harvest.</p>
          </div>
          <div className="col-md-5">
            <img src={radish} width="500" height="500" alt="Radish" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Radishes prefer loose, fertile soil.<br />
              <b>Planting Time:</b><br /> Plant radish seeds directly in the garden in early spring or late summer.<br />
              <b>Planting Steps:</b><br />
              1. Prepare the soil by adding compost and ensuring good drainage.
              2. Plant radish seeds about 1/2 inch deep and 1 inch apart in rows spaced 12 inches apart.
              3. Water the soil well after planting and keep it consistently moist.
              4. Thin the seedlings to 2-3 inches apart once they have grown a few leaves.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer or add well-rotted compost to the soil before planting.<br />
              <b>Application:</b><br />
              1. Radishes generally don't require a lot of fertilizer, but you can side-dress with a balanced fertilizer when the plants are a few inches tall.
              2. Water the radishes well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Radish Growth</Accordion.Header>
            <Accordion.Body>
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods. Radishes prefer even watering for crisp, non-pithy roots.<br />
              <b>Harvesting:</b> <br />Harvest radishes when they reach the desired size, usually 3-4 weeks after planting. Pull them gently from the soil.<br />
              <b>Successive Planting:</b> <br />To enjoy a continuous harvest, plant radishes in succession every 2-3 weeks.<br />
              Growing radishes is a quick and rewarding experience, and with proper care, you can enjoy these crunchy vegetables in no time.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Radish;
