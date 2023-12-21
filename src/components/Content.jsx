import contentImg from '../images/content.jpg';

function Content(props) {
  return (
    <div>
      <header className='content'>
        <section>
          <div className='banner'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family-owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button onClick={props.openForm}>Reserve Table</button>
          </div>

          <div className='banner-img'>
            <img src={contentImg} alt='' />
          </div>
        </section>
      </header>
    </div>
  );
}

export default Content;
