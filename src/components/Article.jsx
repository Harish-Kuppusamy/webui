import newsimg from "../assets/logo.png";

function Article() {
  return (
    <section className="container p-4 shadow-md bg-slate-500 rounded-md mt-6">
      <h1 className="font-thin text-2xl text-center md:text-4xl md:font-semibold md:text-left">
        Latest News
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
        <img
          src={newsimg}
          alt="News"
          className="w-full md:w-1/3 h-auto object-cover rounded-md"
        />

        <div className="flex flex-col gap-4 md:w-2/3 text-center md:text-left">
          <h4 className="font-bold text-2xl md:text-3xl">
            Vite Is Revolutionizing Frontend
          </h4>
          <p className="font-light text-lg md:text-2xl">
            React + Vite is a fast and modern setup for building React apps!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Article;
