import GameCard from "./GameCard";

const Latest = () => {
  return (
    <section>
      <div className="px-4 sm:px-8 mx-auto w-full py-14">
        <p className="text-center">Latest Release</p>
        <h2 className="text-4xl text-white text-center font-semibold mt-2 pb-14">
          CREATE & <span className="text-orange-400">MANAGE</span>
        </h2>
        <div className="flex mx-auto justify-center items-center w-full gap-x-4 py-6 ">
          <GameCard
            imageSrc="./images/latest-game-1.jpg"
            altText="White Walker Daily"
            genre="Zombie"
            title="White Walker"
            price="Free"
          />

          <GameCard
            imageSrc="./images/latest-game-2.jpg"
            altText="Hunter Killer II"
            genre="Adventure"
            title="Hunter Killer"
            price="$25.00"
          />

          <GameCard
            imageSrc="./images/latest-game-3.jpg"
            altText="Cyberpunk Daily"
            genre="Action"
            title="Cyberpunk"
            price="$25.00"
          />
        </div>
      </div>
    </section>
  );
};

export default Latest;
