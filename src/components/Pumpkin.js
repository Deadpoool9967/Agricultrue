import Accordion from 'react-bootstrap/Accordion';
import pumpkin from './images/pumkin.jpeg';

function Pumpkin() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Pumpkin <span className="text-muted"></span></h2>
            <p className="lead">Pumpkins (Cucurbita pepo) are iconic and versatile fruits that are popular for autumn decorations and delicious recipes. Growing pumpkins in your garden can be a fun and rewarding experience, as they come in various shapes, sizes, and colors.</p>
            <p className="lead">Pumpkin plants are warm-season crops, and with proper care, you can harvest pumpkins for carving, cooking, or making pies.</p>
          </div>
          <div className="col-md-5">
            <img src={pumpkin} width="500" height="500" alt="Pumpkin" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Pumpkins prefer soil rich in organic matter.<br />
              <b>Planting Time:</b><br /> Plant pumpkin seeds or seedlings after the last frost date in your area when the soil has warmed.<br />
              <b>Planting Steps:</b><br />
              1. Prepare the soil by adding compost and ensuring good drainage.
              2. Plant pumpkin seeds 1 to 1.5 inches deep and 2-3 seeds per hill, with hills spaced 4-8 feet apart.
              3. Water the soil well after planting and keep it consistently moist.
              4. Thin the seedlings to the strongest plant per hill.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer with a slightly higher ratio of phosphorus for fruit development.<br />
              <b>Application:</b><br />
              1. Apply fertilizer when planting or mix it into the soil before sowing.
              2. Side-dress with fertilizer when the vines start to run (extend).
              3. Water the pumpkins well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Pumpkin Growth</Accordion.Header>
            <Accordion.Body>
              <b>Support:</b> <br />Provide support for the developing pumpkins using straw or boards to keep them off the ground.<br />
              <b>Watering:</b> <br />Maintain consistent soil moisture, especially during dry periods and when the fruit is developing.<br />
              <b>Harvesting:</b> <br />Harvest pumpkins when they have reached the desired size and have a hard rind. Cut the stem with a sharp knife, leaving a few inches attached to the pumpkin.<br />
              Growing pumpkins can be a delightful experience, and with proper care, you can enjoy the beauty and harvest of this iconic fall fruit.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Pumpkin;
