<template>
    <nav>
      <div class="container mx-auto px-6 py-2 flex justify-between items-center">
        <div>
          <a class="font-bold text-2xl lg:text-4xl" href="#">
            Leaf<span class="txt-font"> & Mortar</span>
          </a>
          <ul class="inline-flex mx-5">
            <li><a class="px-4 font-bold cursor-pointer" href="/">Home</a></li>
            <li><a class="px-4 hover:text-gray-800 cursor-pointer" href="!#">Features</a></li>
            <li><a class="px-4 hover:text-gray-800 cursor-pointer" href="!#">Testimonials</a></li>
          </ul>
        </div>
        <div class="block lg:hidden">
          <button
            class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:block">
          <a class="font-bold mx-10 cursor-pointer">Sign In</a>
          <button
            class="bg font-bold text-white rounded-full mt-6 py-3 px-8 shadow-lg tracking-wider"
          >
            Get started today
          </button>
        </div>
      </div>
    </nav>
  </template>