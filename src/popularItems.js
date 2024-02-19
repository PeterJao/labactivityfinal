import Popular from "./popular";

function popularItems(props) {
  const isPopular = props.isPopular;
  if (isPopular) {
    return <Popular />;
  }
  return <noPopular />;
}

export default popularItems;
