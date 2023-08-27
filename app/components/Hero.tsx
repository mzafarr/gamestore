const Hero = () => {
  return (
    <section
      className=" h-screen w-screen justify-center items-start flex px-14"
      aria-label="home"
      style={{ backgroundImage: "url('./images/hero-bg.jpg')" }}
    >
      <div className="p-6 justify-center items-start flex flex-col">
        <h3 className="text-4xl font-bold py-3">World Gaming</h3>
        <h1 className=" text-6xl font-bold py-3">
          CREATE <span className="text-orange-400">MANAGE</span>
          <div className="py-3"> MATCHES</div>
        </h1>
        <p className="text-xl py-3 sm:max-w-[50vw]">
          GAMICS offers captivating glimpse into the immersive world of gaming,
          making it an ideal place for gamers seeking the perfect place to
          indulge in their passion.
        </p>
        <button className="my-3 transform hover:translate-y-2 duration-200 bg-orange-400 text-white px-4 py-3 hover:bg-orange-300">
          Read More
        </button>
      </div>
      <figure
        className="hero-banner img-holder"
      >
        <img
          src="./images/hero-banner.png"
          width="550"
          alt="hero banner"
          className="w-100 py-6"
        />
      </figure>
    </section>
  );
};

export default Hero;
