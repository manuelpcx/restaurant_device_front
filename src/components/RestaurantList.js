import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({ restaurants }) {
  return (
    <div className="container">
      <div className="row gx-3 gy-3">
        {restaurants.length === 0 ? (
          <div className="col-12 text-center">
            <p className="text-muted">No hay restaurantes disponibles.</p>
          </div>
        ) : (
          restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="col-sm-6 col-md-4 mt-5 col-lg-3 col-xl-2 d-flex align-items-stretch"
            >
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RestaurantList;
