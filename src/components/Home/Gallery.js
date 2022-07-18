import React from "react";
import Fade from "react-reveal/Fade";

const Gallery = () => {
  return (
    <section
      className="px-4 pb-10 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      id="gallery"
    >
      <Fade top>
        <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
          <div className="lg:w-1/2">
            <h2 className="max-w-md mb-6 font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
              <span className="text-red-accent-700">Our Creative Gallery</span>
              <br />
              <span className="leading-none lg:leading-loose">
                Spare a Though & Get Inspired
              </span>
              <div className="h-1 w-1/2 duration-300 origin-left transform bg-red-400 scale-x-30 group-hover:scale-x-100 mt-2 sm:mt-0" />
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="font-body text-base text-gray-700 md:text-lg">
              Weddings in Bangladesh mark the union of rituals, lights and
              traditions. Being the greatest occasion for most of the
              Bangladeshi families, everybody wants to make these weddings worth
              looking back to. You can be just a little more sure that down the
              years, your pictures help you feel alive in the moment. Check out
              our Gallery for more.
            </p>
          </div>
        </div>
      </Fade>

      {/* Gallery Images */}
      <div className="py-6 text-red-900">
        <div className="container mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-4 transition-all duration-500 ease-in-out">
          <img
            src="https://wedding-photography-bd.web.app/static/media/Bride-9.b7e5d1b8.jpg"
            alt="Gallery"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 hover:opacity-90"
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src="https://www.canvasofcolor.com/wp-content/uploads/2018/04/3.-Couple-17.jpg"
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src="https://wedding-photography-bd.web.app/static/media/Couple-1.9cf5f30b.jpg"
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src="https://i.pinimg.com/736x/8e/83/31/8e83313ac0f4c16de9da2f867e92f6cf.jpg"
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src="https://content3.jdmagicbox.com/comp/meerut/n5/9999px121.x121.210925124028.n8n5/catalogue/king-wedding-photography-shastri-nagar-meerut-photographers-axx4a7r4lo.jpg?clr=4c2e1a"
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src="https://i.pinimg.com/originals/ee/11/e4/ee11e4a97df8f1aa99f104b7c3dda952.jpg"
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src="https://wedding-photography-bd.web.app/static/media/Couple-14.b9fde29a.jpg"
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src="https://www.nijolcreative.com/wp-content/uploads/2019/11/Wedding-Photography17.jpg"
          />
          <img
            alt="Gallery"
            className="w-full h-full rounded shadow-sm min-h-48 hover:opacity-90"
            src="https://shaadiwish.com/blog/wp-content/uploads/2020/10/bengali-couple-819x1024.jpg"
          />
          <img
            src="https://i.pinimg.com/originals/e5/33/76/e53376d2adae41b4d5f2b9d0ff0b4b6f.jpg"
            alt="Gallery"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 hover:opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
