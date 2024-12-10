import React from "react";
import './RestaurantCard.css'
import { FaCheckCircle, FaExclamationCircle, FaTools } from "react-icons/fa";

function getStatusClass(status) {
  switch (status) {
    case "operativo":
      return "operativo";
    case "fallando":
      return "fallando";
    case "mantenimiento":
      return "mantenimiento";
    default:
      return "bg-secondary";
  }
}

function getStatusBadgeClass(status) {
  switch (status) {
    case "operativo":
      return "badge bg-success";
    case "fallando":
      return "badge bg-danger";
    case "mantenimiento":
      return "badge bg-warning";
    default:
      return "badge bg-secondary";
  }
}

function getDeviceIcon(status) {
  switch (status) {
    case "operativo":
      return <FaCheckCircle className="text-success me-2" />;
    case "fallando":
      return <FaExclamationCircle className="text-danger me-2" />;
    case "mantenimiento":
      return <FaTools className="text-warning me-2" />;
    default:
      return <FaTools className="text-secondary me-2" />;
  }
}

function RestaurantCard({ restaurant }) {
  return (
    <div className="card mb-4 shadow-lg border-0 restaurant-card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">{restaurant.name}</h5>
        <span className={`badge ${getStatusBadgeClass(restaurant.status)}`}>
          {restaurant.status}
        </span>
      </div>
      <div className="card-body">
        <h6 className="text-muted">Dispositivos Asociados</h6>
        {restaurant.devices.length > 0 ? (
          <ul className="list-group">
            {restaurant.devices.map((device) => (
              <li
                key={device.id}
                className={`list-group-item d-flex justify-content-between align-items-center mb-2 ${getStatusClass(
                  device.status
                )}`}
              >
                <div className="device-info">
                  {getDeviceIcon(device.status)} {device.name}
                </div>
                <span className={`badge ${getStatusBadgeClass(device.status)}`}>
                  {device.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted text-center">No hay dispositivos asignados.</p>
        )}
      </div>
    </div>
  );
}

export default RestaurantCard;
