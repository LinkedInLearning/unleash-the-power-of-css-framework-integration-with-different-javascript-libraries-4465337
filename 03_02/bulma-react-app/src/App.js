import person from './assets/person.png'

function App() {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by4">
            <img src={person} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={person} alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content ml-3">
              <p className="title is-4">John Doe</p>
              <p className="subtitle is-6">@johndoe</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@leomofthings </a> 
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time datetime="2023-10-19">11:09 PM - 19 Oct 2023</time>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
