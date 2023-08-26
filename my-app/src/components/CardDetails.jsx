import person from '../assets/person.png'
const info = [
    {
        id: 1,
        name: 'Apdil Shim',
        username: 'Apob'
    },
    {
        id: 2,
        name: 'Lukss Dens',
        username: 'Grak'
    },
    {
        id: 3,
        name: 'Leo Brith',
        username: 'Bgry'
    },
    {
        id: 4,
        name: 'Micj Lest',
        username: 'Ales'
    },
    {
        id: 5,
        name: 'Flnt Russ',
        username: 'ShyRss'
    },
    {
        id: 6,
        name: 'Brod Pilp',
        username: 'WhtPlip'
    },
];
  
  const splitEvery = (array, length) =>
    array.reduce((result, item, index) => {
        if (index % length === 0) result.push([]);
        result[Math.floor(index / length)].push(item);
        return result;
}, []);

function CardDetails() {

  const splitInfo = splitEvery(info, 3);

  return (
    <div className="container mt-4">
      {splitInfo.map((info, index) => (
        <div className="columns is-multiple" key={index}>
          {info.map((data) => (
            <div className="column is-one-third" key={data.id}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by4">
                    <img src={person} alt="random person" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img
                          src={person}
                          alt="random person"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">{data.name}</p>
                      <p className="subtitle is-6">{data.username}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CardDetails
