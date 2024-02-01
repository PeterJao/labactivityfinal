import "./body.css";

function Body(props) {
  return (
    <div class="video-container">
      <video controls src="./video.mp4" alt={props.name}></video>
    </div>
  );
}

export default Body;
