import Socials from "../Socials";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      <div>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text-leading-right">
            Hi, I'm Admon
          </h1>
        </div>
      </div>
      <Socials />
    </section>
  );
};

export default Home;
