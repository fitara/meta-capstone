import { useState, useEffect } from "react";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    times: "",
    guests: "",
    occasion: "",
  });

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const tomorrowStr = tomorrow.toISOString().split("T")[0];

    const bookDate = document.getElementById("date");
    bookDate.setAttribute("min", tomorrowStr);
  }, []);

  const availableTimes = () => {
    const result = [];
    for (let i = 17; i <= 23; i++) {
      result.push(i + ":00 AM");
    }
    return result;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validation = props.reservation(formData);

    if (validation) {
      setFormData({
        name: "",
        date: "",
        times: "",
        guests: "",
        occasion: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='modal'>
      <section>
        <dialog id='formDialog'>
          <form onSubmit={handleSubmit}>
            <fieldset className='formField'>
              <h3>Reservation Form</h3>
              <div>
                <label htmlFor='name'>Your Name</label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  value={formData.name}
                  placeholder='Input your name'
                  onChange={handleChange}
                  autoComplete='name'
                  required
                />
              </div>
              <div>
                <label htmlFor='date'>Choose Date</label>
                <input
                  id='date'
                  name='date'
                  type='date'
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='times'>Choose Time</label>
                <select
                  id='times'
                  name='times'
                  value={formData.times}
                  onChange={handleChange}
                  required
                >
                  <option value='' disabled>
                    Select a time
                  </option>
                  {availableTimes().map((availableTime) => (
                    <option key={availableTime} value={availableTime}>
                      {availableTime}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor='guests'>Number of Guests</label>
                <input
                  id='guests'
                  name='guests'
                  placeholder='0 person'
                  min='1'
                  max='10'
                  type='number'
                  value={formData.guests}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor='occasion'>Occasion</label>
                <select
                  id='occasion'
                  name='occasion'
                  value={formData.occasion}
                  onChange={handleChange}
                  required
                >
                  <option value='' disabled>
                    Select an Option
                  </option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Meeting</option>
                </select>
              </div>
              <div className='receive-btn'>
                <button type='submit'>Make Your Reservation</button>
              </div>
            </fieldset>
            <button
              type='button'
              className='close-btn'
              onClick={props.closeForm}
            >
              &#10006;
            </button>
          </form>
          <button type='button' className='close-btn' onClick={props.closeForm}>
            &#10006;
          </button>
        </dialog>
      </section>
    </div>
  );
}

export default Form;
