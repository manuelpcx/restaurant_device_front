import React, { useEffect, useState } from "react";
import RestaurantList from "./components/RestaurantList";
import { cable } from "./actioncable";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();

    const subscription = cable.subscriptions.create("DeviceUpdatesChannel",{
      received: (data) => {
        console.log("Se recibe la actualizacion desde la api", data);
        fetchRestaurants();
      }
    });

    return () => {
      subscription.unsubscribe();
    }
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/restaurants");
      if (!response.ok) {
        throw new Error("Error al cargar los restaurantes");
      }
      const data = await response.json();
      setRestaurants(data);
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudieron cargar los datos de los restaurantes.");
    }
  };
  console.log(restaurants)

  return (
    <div className="container my-4">
      <h1 className="text-center">Gestión de Restaurantes y Dispositivos</h1>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
}

export default App;
