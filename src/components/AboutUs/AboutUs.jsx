import React from 'react';

function AboutUs() {
  return (
    <section className="bg-yellow-500 text-white flex flex-col items-center justify-center py-10">
      <article className="h-screen w-full flex flex-col items-center px-5 mx-5 lg:px-10 lg:mx-10">
        <div className="w-10/12">
          <div
            className="h-5 w-full bg-pink-500 relative top-1/2 z-0 transform -rotate-6 -translate-x-6"
            style={{ content: '""' }}
          ></div>
          <h1 className="font-title text-3xl relative z-20 lg:text-5xl lg:px-1">
            making complex things simple
          </h1>
        </div>
        <p className="h-3/4 text-center border-8 border-white p-3 mt-2 leading-10 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aut
          tenetur tempore consectetur animi minima adipisci, repellat vel earum,
          impedit perspiciatis unde dolorem velit? Necessitatibus ex maxime
          ipsam aspernatur commodi corporis?
        </p>
      </article>
      <article className="h-screen w-full flex flex-col items-center px-5 mx-5 lg:px-10 lg:mx-10">
        <div className="w-10/12">
          <div
            className="h-5 w-full bg-pink-500 relative top-1/2 z-0 transform rotate-2 -translate-x-2"
            style={{ content: '""' }}
          ></div>
          <h1 className="font-title text-5xl relative z-20 lg:px-1">
            our vision
          </h1>
        </div>
        <ul className="h-full flex flex-col justify-around lg:flex-row">
          <li className="w-40 h-40 border-2 border-white">
            <h2 className="bg-white text-yellow-500 text-center font-black">
              placeholder
            </h2>
            <p className="text-justify p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </li>
          <li className="w-40 h-40 border-2 border-white">
            <h2 className="bg-white text-yellow-500 text-center font-black">
              placeholder
            </h2>
            <p className="text-justify p-4">Lorem ipsum dolor sit amet.</p>
          </li>
          <li className="w-40 h-40 border-2 border-white">
            <h2 className="bg-white text-yellow-500 text-center font-black">
              placeholder
            </h2>
            <p className="text-justify p-4">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </li>
        </ul>
      </article>
      <article className="h-screen w-full flex flex-col items-center px-5 mx-5 lg:px-10 lg:mx-10">
        <div className="w-10/12">
          <div
            className="h-5 w-full bg-pink-500 relative top-1/2 z-0 transform rotate-4 -translate-x-6"
            style={{ content: '""' }}
          ></div>
          <h1 className="font-title text-5xl relative z-20 lg:px-1">
            services
          </h1>
        </div>
        <div className="relative">
          <svg
            className="w-full h-full fill-current text-yellow-600 absolute z-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            /* fill="white" */
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M12.484 24v-5.991l2.224 2.352 4.042-2.12v2.416l-6.266 3.343zm-1-.003l-6.26-3.34v-2.465l4.088 2.245 2.172-2.385v5.945zm-3.7-15.313c.639.777 1.27 1.934 1.459 3.18l-3.208 1.77 5.449 2.891v.042l-2.381 2.614-4.599-2.525-.001.001-1.533-.883 2.254-2.481-2.254-2.121 4.814-2.488zm8.431.031l4.789 2.499-2.255 2.078.001.001 2.254 2.59-1.604.888-4.485 2.353-2.431-2.571v-.003l5.457-2.916-3.169-1.748c.194-1.321.695-2.266 1.443-3.171zm-3.967 5.285h-.521c-.137 0-.269-.046-.359-.127l-.693-.456h2.625l-.693.456c-.09.081-.221.127-.359.127zm1.077-1.167h-2.659c-.161 0-.292-.13-.292-.291 0-.161.131-.292.292-.292h2.659c.161 0 .291.131.291.292 0 .161-.13.291-.291.291zm.288-1.166h-3.251c0-2.304-1.874-3.301-1.874-5.383 0-2.172 1.748-3.367 3.498-3.367 1.75 0 3.502 1.197 3.502 3.367 0 2.082-1.875 3.047-1.875 5.383zm-6.267-5.334h-1.775v-1h1.821c-.039.22-.06.446-.06.676l.014.324zm11.058 0h-1.763l.013-.324c0-.23-.02-.456-.059-.676h1.809v1zm-9.998-3.02c-.227.248-.424.52-.584.811l-1.441-1.023.579-.815 1.446 1.027zm7.17-.005l1.439-1.022.579.815-1.432 1.018c-.161-.291-.359-.563-.586-.811zm-5.307-1.223c-.319.115-.621.261-.901.435l-.773-1.58.898-.44.776 1.585zm3.439-.004l.774-1.581.898.44-.77 1.574c-.281-.172-.583-.318-.902-.433zm-1.22-.272c-.163-.015-.328-.023-.495-.023-.171 0-.339.008-.505.024v-1.81h1v1.809z" />
          </svg>
          <p className="relative z-20">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            placeat maiores earum blanditiis mollitia quis recusandae
            accusantium corrupti similique distinctio repudiandae inventore
            soluta, reprehenderit quo dignissimos! Nobis eligendi perspiciatis
            magni optio, voluptatum maiores cumque dolore, ex, asperiores animi
            quod provident eaque. Tempora tempore molestias delectus est neque
            voluptates accusantium similique!
          </p>
        </div>
      </article>
      <button className="border-8 border-white uppercase px-8 py-5">
        chat with us
      </button>
    </section>
  );
}

export default AboutUs;
