import Accordion from 'react-bootstrap/Accordion';
import tomato from './images/tomato.jpeg';

function Tomato() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Tomato <span className="text-muted"></span></h2>
            <p className="lead">Tomatoes (Solanum lycopersicum) are popular and versatile fruits that are a staple in many dishes. Growing tomatoes at home allows you to enjoy the freshness and flavor of vine-ripened fruit. Tomatoes are warm-season crops, and they thrive in well-drained, fertile soil with plenty of sunlight.</p>
            <p className="lead">With proper care, you can harvest juicy and flavorful homegrown tomatoes.</p>
          </div>
          <div className="col-md-5">
            <img src={tomato} width="500" height="500" alt="Tomato" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained, fertile soil. Tomatoes require at least 6-8 hours of sunlight per day.<br />
              <b>Planting Time:</b><br /> Plant tomato seeds indoors 6-8 weeks before the last expected frost, or transplant seedlings outdoors after all danger of frost has passed.<br />
              <b>Planting Steps:</b><br />
              1. Plant tomato seeds in seed trays or small pots, keeping them warm and well-lit.
              2. Transplant seedlings into the garden when they are 6-8 inches tall, spacing them 2-3 feet apart.
              3. Water the soil well after transplanting.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer or add well-rotted compost to the soil before planting.<br />
              <b>Application:</b><br />
              1. Fertilize the soil before planting with compost or a balanced fertilizer.
              2. Side-dress with fertilizer when the first fruit sets.
              3. Water the tomato plants regularly and deeply.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Tomato Growth</Accordion.Header>
            <Accordion.Body>
              <b>Support:</b> <br />Provide support for indeterminate tomato varieties using stakes or cages to prevent sprawling.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, and water the plants at the base to avoid wetting the foliage.
              <b>Pruning:</b> <br />Prune indeterminate varieties by removing suckers and lower leaves for better air circulation.
              Growing tomatoes can be a rewarding experience, and with proper care, you can enjoy the pleasure of harvesting your own homegrown tomatoes.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Tomato;
