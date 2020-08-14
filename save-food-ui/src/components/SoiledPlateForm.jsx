import React, { useState } from "react";

const SoiledPlate = () => {
  const [newItem, setNewItem] = useState({});
  const [totalItem, addTotalItem] = useState([]);

  const addFoodHandler = (e) => {
    console.log("newItem", newItem);
    const items = totalItem.concat(newItem);
    console.log("items", items);
    addTotalItem(items);
    setNewItem({});
    console.log("totalItem", totalItem.length);
  };

  const formFiledChangeListener = (e) => {
    const item = { [e.target.id]: e.target.value };
    console.log("item", item);
    setNewItem({ ...newItem, ...item });
  };

  return (
    <section className="contact-section">
      <div className="container">
        {/**
        <div className="d-none d-sm-block mb-5 pb-4">
          <div className="container">
            <div className="d-none d-sm-block mb-5 pb-4">
              <div
                id="map"
                style={{
                  height: "480px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    backgroundColor: "rgb(229, 227, 223)",
                  }}
                >
                  <div
                    className="gm-style"
                    style={{
                      position: "absolute",
                      zIndex: "0",
                      left: "0px",
                      top: "0px",
                      height: "100%",
                      width: "100%",
                      padding: "0px",
                      borderWidth: "0px",
                      margin: "0px",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        **/}
        <div className="row">
        <div className="col-12">
            <h2 className="contact-title">Soiled/Waste Food Detail</h2>
          </div>
          <div className="col-lg-12">
            <form className="form-contact contact_form">
              <div className="row">
                <div className="col-10">
                  <div className="row">
                    <div className="col-7">
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="foodName"
                          id="foodName"
                          type="text"
                          placeholder="Food Name"
                          onChange={formFiledChangeListener}
                        />
                      </div>
                    </div>
                    
                    <div className="col-3">
                      <div className="form-group">
                        <select
                          className="form-control w-100"
                          id="vegNonVeg"
                          required
                          onChange={formFiledChangeListener}
                        >
                          <option>Vegetarian</option>
                          <option>Non-Vegetarian</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="form-group">
                        <input
                          className="form-control valid"
                          name="qty"
                          id="qty"
                          type="text"
                          placeholder="Quantity"
                          onChange={formFiledChangeListener}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  {" "}
                  <button
                    type="button"
                    className="btn"
                    onClick={addFoodHandler}
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Food Name</th>
                        <th scope="col">Food Type</th>
                        <th scope="col">Veg/Non-Veg</th>
                        <th scope="col">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      {totalItem.map((food, idx) => {
                        return (
                          <tr>
                            <th scope="row">{idx}</th>
                            <td>{food.foodName}</td>
                            <td>{food.foodType}</td>
                            <td>{food.vegNonVeg}</td>
                            <td>{food.qty}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-12">
                  <h2 className="contact-title">Share your Plate</h2>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control valid"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button
                  type="submit"
                  className="button button-contactForm boxed-btn"
                >
                  Click to share your plate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoiledPlate;
