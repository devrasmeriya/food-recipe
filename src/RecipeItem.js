import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

const RecipeItem = (props) => {
  const { name, image, ingredientLines } = props;
  const [show, setShow] = useState(false);

  return (
    <div className="card py-2 text-center">
      <img
        src={image}
        className="img-fluid w-20 mx-auto rounded-circle"
        alt={name}
      />
      <div className="card-body">
        <h6>{name}</h6>
      </div>

      <button
        type="button"
        className="btn btn-outline-primary m-2"
        onClick={() => setShow(!show)}
      >
         {!show ? "Show More..." : "Show Less"}
      </button>
      {show && (
        <ul className="list-group list-group-flush">
          <Typography variant="h6" noWrap>
            INGREDIENTS
          </Typography>
          {ingredientLines.map((ingredient) => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeItem;
