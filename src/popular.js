import "./popular.css";

function Popular(props) {
  const isAvailable = props.isAvailable;
  if (isAvailable) {
    return (
      <div class="middle">
        <p class="popular">Popular Now</p>
        <div class="row">
          <div class="column">
            <div class="card">
              <h3>Beats Studio Pro</h3>
              <p>$349.99</p>
              <img class="a" src="./beatsstudiopro.png" alt="first"></img>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3>Beats Studio Buds</h3>
              <p>$149.99</p>
              <img class="a" src="./beatsstudiobuds.png" alt="second"></img>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <h3>Beats Solo Wireless</h3>
              <p>$199.95</p>
              <img class="a" src="./beatswireless.png" alt="third"></img>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Sorry! There are no popular Items for now. </h1>;
  }
}

export default Popular;
