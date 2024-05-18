import Accordion from 'react-bootstrap/Accordion';
import beetroot from './images/beetroot.jpeg';

function Beetroot() {
  return (
    <>
      <br />
      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">Beetroot <span className="text-muted"></span></h2>
            <p className="lead">Beetroot (Beta vulgaris) is a colorful and nutritious root vegetable that can be grown in home gardens. Whether you enjoy them roasted, boiled, or in salads, growing beetroot allows you to enjoy the earthy flavor and vibrant color of this vegetable at its freshest. Beetroot is a cool-season crop, and it prefers well-drained soil with good fertility.</p>
            <p className="lead">With proper care, you can harvest sweet and tender homegrown beetroot.</p>
          </div>
          <div className="col-md-5">
            <img src={beetroot} width="500" height="500" alt="Beetroot" />
          </div>
        </div>
        <br />

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How to plant?</Accordion.Header>
            <Accordion.Body>
              <b>Location:</b> <br />Choose a sunny location with well-drained soil. Beetroot prefers loose, sandy soil.<br />
              <b>Planting Time:</b><br /> Direct sow beetroot seeds in early spring or late summer for a fall harvest.<br />
              <b>Planting Steps:</b><br />
              1. Sow beetroot seeds directly into the soil, spacing them 2-4 inches apart in rows spaced about 12-18 inches apart.
              2. Cover the seeds with a thin layer of soil and water gently.
              3. Thin seedlings to the desired spacing once they are a few inches tall.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>How much Fertilizers should you use and how?</Accordion.Header>
            <Accordion.Body>
              <b>Type:</b> <br />Use a balanced fertilizer or add well-rotted compost to the soil before planting.<br />
              <b>Application:</b><br />
              1. Fertilize the soil before planting with compost or a balanced fertilizer.
              2. Avoid high-nitrogen fertilizers, as they can promote excessive foliage growth at the expense of the roots.
              3. Water the beetroot bed well after applying fertilizer.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Tips for Successful Beetroot Growth</Accordion.Header>
            <Accordion.Body>
              <b>Thinning:</b> <br />Thin beetroot seedlings to the desired spacing once they are a few inches tall.<br />
              <b>Watering:</b> <br />Keep the soil consistently moist, especially during dry periods.
              <b>Harvesting:</b> <br />Harvest beetroot when they reach the desired size. Use a fork or trowel to lift them gently from the soil.
              Growing beetroot can be a delightful experience, and with proper care, you can enjoy the sweet and earthy taste of homegrown beetroot.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <br />
    </>
  );
}

export default Beetroot;
