import React from 'react';

function Footer() {
  return (
    <footer className="w-full h-90 bg-yellow-900 px-2 text-white text-xl grid grid-cols-2 gap-2 items-center">
      <BrandLogoAndSlogan />
      <Contact />
      <Legal />
      <Socials />
      <Author />
    </footer>
  );
}

function BrandLogoAndSlogan() {
  return (
    <div className="flex pt-5 col-span-full order-first lg:col-span-1">
      <svg
        title="brand-logo"
        className="h-20 w-20"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M12.297 5.574l-.005-.005s1.703-1.754 2.388-2.259c1.181-.871 2.743-.339 2.743-.339s.021 1.465-.936 2.06c-.913.568-1.788.333-1.882.307.355-.5.853-1.165 1.521-1.498-.493-.028-1.09.246-1.557.681-.38.353-1.26 1.257-1.57 1.576v3.1c1.068-.86 3.035-2.439 3.603-2.877 1.568-1.212 3.691-.522 3.691-.522s.028 1.963-1.254 2.76c-1.223.76-2.753.298-2.878.263.605-.668 1.563-1.277 2.457-1.722-.898-.122-1.614.157-2.749 1.06-.789.629-2.491 2.013-2.87 2.321v3.201c1.229-.929 3.753-2.811 4.9-3.452 2.85-1.593 5.101-.284 5.101-.284s-.263 2.57-2.061 3.417c-1.714.808-3.837-.076-3.996-.14.893-.782 2.197-1.467 3.585-1.816-1.316-.209-2.626-.195-4.415 1.213-.95.747-2.665 1.997-3.114 2.323l.001 9.08h-2l-.001-9.08c-.45-.328-2.162-1.576-3.112-2.323-1.789-1.408-3.099-1.422-4.415-1.213 1.388.349 2.692 1.034 3.585 1.816-.159.064-2.282.948-3.996.14-1.798-.847-2.061-3.417-2.061-3.417s2.251-1.309 5.101.284c1.146.641 3.67 2.521 4.898 3.452v-3.198c-.37-.301-2.081-1.693-2.874-2.324-1.135-.903-1.851-1.182-2.749-1.06.895.445 1.853 1.054 2.457 1.722-.125.035-1.655.497-2.877-.263-1.282-.797-1.254-2.76-1.254-2.76s2.122-.69 3.691.522c.568.439 2.539 2.021 3.606 2.88v-3.105c-.311-.321-1.189-1.222-1.568-1.574-.467-.435-1.064-.709-1.557-.681.668.333 1.166.998 1.521 1.498-.094.026-.969.261-1.882-.307-.957-.595-.936-2.06-.936-2.06s1.562-.532 2.743.339c.685.505 2.388 2.259 2.388 2.259l-.006.007.297.276.298-.278zm2.895 9.386c.389-.138 2.022-.636 3.583.12 1.788.866 2.037 3.461 2.037 3.461s-2.178 1.42-3.978.549c-1.717-.831-2.297-2.637-2.347-2.801 1.177.203 2.363.618 3.494 1.305-.847-1.062-1.783-1.926-2.789-2.634zm-6.384 0c-.389-.138-2.022-.636-3.583.12-1.788.866-2.037 3.461-2.037 3.461s2.178 1.42 3.978.549c1.717-.831 2.297-2.637 2.347-2.801-1.177.203-2.363.618-3.494 1.305.847-1.062 1.783-1.926 2.789-2.634zm3.664-10.973c.175-.175.866-.929.861-1.969-.005-1.19-1.344-1.996-1.344-1.996s-1.332.811-1.326 2.009c.006 1.143.832 1.924.908 1.993.194-.689.276-1.437.198-2.227.355.734.58 1.463.703 2.19z" />
      </svg>
      <div className="uppercase flex flex-col justify-start">
        <h1 className="text-3xl font-title font-bold">tree-umph</h1>
        <h2>we make dreams</h2>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <ul className="lg:order-2 lg:ml-10">
      <li>
        <p>Fake Street 332, False City</p>
      </li>
      <li>
        <p>+00 1234 - 5678</p>
      </li>
      <li>
        <p>companymail@fake.com</p>
      </li>
    </ul>
  );
}

function Legal() {
  return (
    <ul className="justify-self-end cursor-pointer lg:order-3 lg:mr-10">
      <li>
        <p>Privacy Policy</p>
      </li>
      <li>
        <p>Terms of Use</p>
      </li>
      <li>
        <p>Disclaimer</p>
      </li>
      <li>
        <p>Copyright 20XX</p>
      </li>
    </ul>
  );
}

function Socials() {
  return (
    <ul className="flex justify-around col-span-full mt-5 text-2xl cursor-pointer lg:order-1 lg:col-span-1">
      <li>
        <i class="fab fa-twitter"></i>
      </li>
      <li>
        <i class="fab fa-facebook"></i>
      </li>
      <li>
        <i class="fab fa-instagram"></i>
      </li>
      <li>
        <i class="fab fa-linkedin-in"></i>
      </li>
      <li>
        <i class="fab fa-youtube"></i>
      </li>
    </ul>
  );
}

function Author() {
  return (
    <div className="col-span-full flex justify-between mx-3 text-yellow-600 border-t-2 border-yellow-800 lg:order-last">
      <ul className="flex gap-10">
        <li>
          <a
            href="mailto:nicolasmpellecchia@gmail.com"
            className="hover:text-yellow-300 transition"
          >
            <i class="far fa-envelope"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/nmpellecchia"
            className="hover:text-yellow-300 transition"
          >
            <i class="fab fa-github-alt"></i>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/nicopell"
            className="hover:text-yellow-300 transition"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <p>Nicolas Pellecchia ©2021</p>
    </div>
  );
}

export default Footer;
