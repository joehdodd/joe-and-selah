const Hero = () => {
  return (
    <div>
      <div className="bg-hero bg-center bg-cover bg-no-repeat h-[400px] md:h-[600px] w-full">
        <div className="h-full w-full flex justify-center items-center text-center text-white">
          <div>
            <div className="hidden md:block">
              <h3 className="text-6xl">Joe &amp; Selah</h3>
              <hr />
            </div>
            <h1 className="text-3xl">Chattanooga Documentary Photographers</h1>
            <h3 className="text-2xl">
              Remember the day. As it happened.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
