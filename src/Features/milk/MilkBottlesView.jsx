import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./MilkBottlesView.css";
import { MilkActions } from "./MilkBottles";
function MilkBottlesView() {
  const ml1000 = useSelector((state) => state.milk.ML1000);
  const ml500 = useSelector((state) => state.milk.ML500);
  const ml250 = useSelector((state) => state.milk.ML250);

  const [flag1000ml, setFlag1000ml] = useState(false);
  const [flag500ml, setFlag500ml] = useState(false);
  const [flag250ml, setFlag250ml] = useState(false);
  const [flagsuccess, setFlagSuccess] = useState(false);

  const [milk1000ml, steMilk1000ml] = useState(0);
  const [milk500ml, steMilk500ml] = useState(0);
  const [milk250ml, steMilk250ml] = useState(0);

  const dispatch = useDispatch();

  function handleDispatches() {
    dispatch(MilkActions.orderML1000(milk1000ml));
    dispatch(MilkActions.orderML500(milk500ml));
    dispatch(MilkActions.orderML250(milk250ml));

    if (milk1000ml != 0 || milk500ml != 0 || milk250ml != 0) {
      setFlagSuccess(true);
      setInterval(() => {
        setFlagSuccess(false);
      }, 1500);
    }
    steMilk1000ml(0);
    steMilk500ml(0);
    steMilk250ml(0);
    setFlag1000ml(false);
    setFlag500ml(false);
    setFlag250ml(false);
  }

  return (
    <div className="cantiner">
      <div className="item">
        <p>Milk 1000ml : {milk1000ml}</p>
        <p>(avilable : {ml1000})</p>
        <button
          onClick={() => {
            clearInterval(() => {
              setFlagSuccess(false);
            }, 1500);
            setFlagSuccess(false);
            milk1000ml < ml1000
              ? steMilk1000ml((pre) => pre + 1)
              : setFlag1000ml(true);
          }}
        >
          Add
        </button>
        {flag1000ml ? (
          <p style={{ color: "red" }}>only {ml1000} avilable</p>
        ) : null}
      </div>
      <div className="item">
        <p>Milk 500ml : {milk500ml}</p>
        <p>(avilable : {ml500})</p>
        <button
          onClick={() => {
            clearInterval(() => {
              setFlagSuccess(false);
            }, 1500);
            setFlagSuccess(false);
            milk500ml < ml500
              ? steMilk500ml((pre) => pre + 1)
              : setFlag500ml(true);
          }}
        >
          Add
        </button>

        {flag500ml ? (
          <p style={{ color: "red" }}>only {ml500} avilable</p>
        ) : null}
      </div>
      <div className="item">
        <p>Milk 250ml : {milk250ml}</p>
        <p>(avilable : {ml250})</p>
        <button
          onClick={() => {
            clearInterval(() => {
              setFlagSuccess(false);
            }, 1500);
            setFlagSuccess(false);
            milk250ml < ml250
              ? steMilk250ml((pre) => pre + 1)
              : setFlag250ml(true);
          }}
        >
          Add
        </button>

        {flag250ml ? (
          <p style={{ color: "red" }}>only {ml250} avilable</p>
        ) : null}
      </div>
      <div className="cart">
        <div className="quantity ml1000">
          {[...Array(milk1000ml)].map((_, i) => (
            <div
              className="cart-item"
              key={i}
              onClick={() => {
                steMilk1000ml((pre) => pre - 1);
                setFlag1000ml(false);
              }}
            >
              1000ml
            </div>
          ))}
        </div>
        <div className="quantity ml500">
          {[...Array(milk500ml)].map((_, i) => (
            <div
              className="cart-item"
              key={i}
              onClick={() => {
                steMilk500ml((pre) => pre - 1);
                setFlag500ml(false);
              }}
            >
              500ml
            </div>
          ))}
        </div>
        <div className="quantity ml250">
          {[...Array(milk250ml)].map((_, i) => (
            <div
              className="cart-item"
              key={i}
              onClick={() => {
                steMilk250ml((pre) => pre - 1);
                setFlag250ml(false);
              }}
            >
              250ml
            </div>
          ))}
        </div>
        <div className="btn">
          <button onClick={handleDispatches}>ORDER</button>
        </div>
        {flagsuccess ? <h3 className="success">Order Successfull..!</h3> : null}
      </div>
    </div>
  );
}

export default MilkBottlesView;
