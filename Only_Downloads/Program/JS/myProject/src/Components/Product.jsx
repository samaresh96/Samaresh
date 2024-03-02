import { Button } from "@mui/material";
import "../Styles/Product.css";
import { useDispatch, useSelector } from "react-redux";
import { incre, decre } from "../Slices/slice2";
const Product = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer2);

  return (
    <div>
      <h2>{state}</h2>
      <div className="but">
        <Button
          variant="contained"
          color="primary"
          onClick={() => dispatch(incre())}
        >
          Click
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch(decre())}
        >
          Jump
        </Button>
      </div>
    </div>
  );
};

export default Product;
