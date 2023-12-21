import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Form from "./components/Form"
test("Submit the booking form", async () => {
  const props = { reservation: jest.fn() };
  render(
    <BrowserRouter>
      <Form {...props} />
    </BrowserRouter>
  );

  const nameInput = screen.getByLabelText("Your Name");
  const dateInput = screen.getByLabelText("Choose Date");
  const timeSelect = screen.getByLabelText("Choose Time");
  const guestsInput = screen.getByLabelText("Number of Guests");
  const occasionSelect = screen.getByLabelText("Occasion");
  const submitButton = screen.getByText("Make Your Reservation");

  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(dateInput, { target: { value: "2023-12-31" } });
  fireEvent.change(timeSelect, { target: { value: "18:00 AM" } });
  fireEvent.change(guestsInput, { target: { value: "5" } });
  fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(props.reservation).toHaveBeenCalled();
  });
});
