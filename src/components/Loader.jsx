import { Grid } from "react-loader-spinner";
import "../index.css";

function Loader() {
  return (
    <div className="loader">
      <Grid color="blue" height={180} width={180} justifyContent="center" />
    </div>
  );
}

export default Loader;
