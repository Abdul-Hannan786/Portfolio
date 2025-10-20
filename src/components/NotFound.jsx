const NotFound = () => {
  return (
    <div className="stars relative h-screen flex items-center justify-center">
      <div className="central-body">
        <img
          className="image-404"
          src="http://salehriaz.com/404Page/img/404.svg"
          width="300"
          alt="404 Not Found"
        />
      </div>
      <div className="objects">
        <img
          className="object_rocket"
          src="http://salehriaz.com/404Page/img/rocket.svg"
          width="40"
          alt="Rocket"
        />
        <div className="earth-moon">
          <img
            className="object_earth"
            src="http://salehriaz.com/404Page/img/earth.svg"
            width="100"
            alt="Earth"
          />
          <img
            className="object_moon"
            src="http://salehriaz.com/404Page/img/moon.svg"
            width="80"
            alt="Moon"
          />
        </div>
      </div>
      <div className="glowing_stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
  );
};

export default NotFound;
