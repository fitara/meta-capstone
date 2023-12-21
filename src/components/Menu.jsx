import recipes from "../recipes";
import { toast } from "react-toastify";

function Menu() {
  const handleOrder = () => {

    toast.promise(
      new Promise((resolve, reject) => {
        const onCancel = () => {
          reject();
        };

        const onSubmit = () => {
          setTimeout(() => {
            resolve();
          }, 1000);
        };

        toast(
          <div className='toast-content'>
            <p>Do you want to confirm the order?</p>
            <div className='toast-buttons'>
              <button className='cancel' onClick={onCancel}>
                Cancel
              </button>
              <button className='submit' onClick={onSubmit}>
                Submit
              </button>
            </div>
          </div>,
          {
            position: "top-center",
            autoClose: false,
            closeButton: false,
            style: { marginTop: "50%" },
          }
        );
      }),
      {
        pending: "Order in progress",
        success: "Your order has been confirmed.",
        error: "Your order has been canceled.",
      }
    );
  };

  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This week's specials</h2>
        <div className='border-bottom'></div>
        <button>Online Menu</button>
      </div>
      <div className='cards'>
        {recipes.map((recipe) => (
          <div key={recipe.id} className='menu-items'>
            <img src={recipe.image} alt='' />
            <div className='menu-content'>
              <div className='heading'>
                <h4>{recipe.title}</h4>
                <h4>${recipe.price}</h4>
              </div>
              <p className='description'>{recipe.description}</p>
            </div>
            <button
              className='order-btn'
              onClick={() => handleOrder(recipe.id)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
