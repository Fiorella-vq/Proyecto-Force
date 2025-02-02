import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <div className="mb-3">
        <h2> BIENVENIDOS</h2>
        <h2>A LA</h2>
        <h2>TINCHONETA!</h2>
        <div className="container m-5 d-flex justify-content-center">
          <Link to="/form">
            <button type="button" className="btn btn-outline-light">
              INGRESAR
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
