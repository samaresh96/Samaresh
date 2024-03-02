import { useDispatch, useSelector } from "react-redux";
import "../Styles/App.css";
import { Button } from "@mui/material";
import { incre, decre } from "../Slices/slice1";
import "../Styles/App.css"
const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer1);

  return (
    <div>
      <h1>{state}</h1>
      <div className="main">
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(incre());
        }}
      >
        ADD
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          dispatch(decre());
        }}
      >
        DEL
      </Button>
      </div>
    </div>
  );
};

export default App;
