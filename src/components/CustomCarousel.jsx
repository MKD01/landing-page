import Carousel from "react-bootstrap/Carousel";

function CustomCarousel({ items }) {
  const formattedItems = [
    [items[0], items[1], items[2]],
    [items[3], items[0], items[1]],
    [items[2], items[3], items[0]],
    [items[1], items[2], items[3]],
  ];

  for (let i = 0; i < items.length; i++) {}

  return (
    <Carousel indicators={false}>
      {formattedItems.map((items, i) => {
        return (
          <Carousel.Item key={i}>
            <div className='carousel-items'>
              {items.map(({ avatar, name, message }) => {
                return (
                  <div key={avatar} className='team-card'>
                    <img
                      className='avatar'
                      src={`/avatars/${avatar}`}
                      alt={`avatar of ${name}`}
                    />

                    <div className='team-card-text-container'>
                      <h3>{name}</h3>
                      <p>{message}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default CustomCarousel;
