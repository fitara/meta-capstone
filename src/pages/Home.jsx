import React from "react";
import { useNavigate } from "react-router-dom";
import Content from "../components/Content";
import Form from "../components/Form";
import Menu from "../components/Menu";
import { toast } from "react-toastify";

function Home() {
  const navigate = useNavigate();

  const allowed = (newReservation) => {
    const existingData =
      JSON.parse(localStorage.getItem("reservationData")) || [];
    const existingDate = existingData.find(
      (data) =>
        data.date === newReservation.date && data.times === newReservation.times
    );

    if (existingDate) return "Sorry, that time is already booked.";

    if (existingData.length >= 5) return "Sorry, already fully booked.";

    return null;
  };

  const reservation = (formData) => {
    const validationError = allowed(formData);

    if (validationError) {
      toast.error(validationError);
      return false;
    }

    const data = JSON.parse(localStorage.getItem("reservationData")) || [];
    data.push(formData);

    localStorage.setItem("reservationData", JSON.stringify(data));

    toast.success("Your reservation confirmed");
    navigate("/reservations");

    return true;
  };

  const openForm = () => {
    document.getElementById("formDialog").showModal();
  };

  const closeForm = () => {
    document.getElementById("formDialog").close();
  };

  return (
    <>
      <Content openForm={openForm} />
      <Form reservation={reservation} closeForm={closeForm} />
      <Menu />
    </>
  );
}

export default Home;
