'use client'
import React from 'react'

const HomePage = () => {
  return (
    <div>
<header className="px-4 lg:px-6 h-14 flex items-center">
    <a href="#" className="flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <circle cx={8} cy={21} r={1} />
        <circle cx={19} cy={21} r={1} />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
      <span className="sr-only">Acme Inc</span>
    </a>
    <nav className="ml-auto flex gap-4 sm:gap-6">
      <a
        className="text-sm font-medium hover:underline underline-offset-4"
        href="signin"
      >
        Login
      </a>
      <a
        className="text-sm font-medium hover:underline underline-offset-4"
        href="signup"
      >
        SignUp
      </a>
      <a
        className="text-sm font-medium hover:underline underline-offset-4"
        href="About"
      >
        About
      </a>
      <a
        className="text-sm font-medium hover:underline underline-offset-4"
        href="ContactUs"
      >
        Contact
      </a>
    </nav>
  </header>
  <main className="flex-1">
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to TemplateWave
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              Discover amazing templates across various categories. Shop now and
              enjoy great deals!
            </p>
          </div>
          <div className="space-x-4">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
              Explore
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Featured Templates
        </h2>
        <div class="flex flex-col space-y-6 p-6">
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col space-y-4 p-6">
    <h3 class="text-2xl font-semibold leading-none tracking-tight">React Template</h3>
    <img
      src="https://i.pinimg.com/enabled/564x/83/71/2b/83712bc0f934de891b2ea1e6d728e935.jpg"
      alt="Electronics"
      class="w-full h-64 object-cover rounded-lg"
    />
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 py-2 px-4 w-full">
    React Template
    </button>
  </div>

  <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col space-y-4 p-6">
    <h3 class="text-2xl font-semibold leading-none tracking-tight">React Template</h3>
    <img
      src="/placeholder.svg"
      alt="Clothing"
      class="w-full h-64 object-cover rounded-lg"
    />
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 py-2 px-4 w-full">
    React Template
    </button>
  </div>

  <div class="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col space-y-4 p-6">
    <h3 class="text-2xl font-semibold leading-none tracking-tight">React Template</h3>
    <img
      src="/placeholder.svg"
      alt="Home & Garden"
      class="w-full h-64 object-cover rounded-lg"
    />
    <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 py-2 px-4 w-full">
    React Template
    </button>
  </div>
</div>
</div>

    </section>
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <img
                src="/placeholder.svg"
                alt="Product 1"
                className="w-full h-48 object-cover mb-4"
                width={200}
                height={200}
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
              <h3 className="text-lg font-semibold mb-2">Product 1</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">$99.99</span>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <img
                src="/placeholder.svg"
                alt="Product 2"
                className="w-full h-48 object-cover mb-4"
                width={200}
                height={200}
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
              <h3 className="text-lg font-semibold mb-2">Product 2</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">$79.99</span>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <img
                src="/placeholder.svg"
                alt="Product 3"
                className="w-full h-48 object-cover mb-4"
                width={200}
                height={200}
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
              <h3 className="text-lg font-semibold mb-2">Product 3</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">$129.99</span>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <img
                src="/placeholder.svg"
                alt="Product 4"
                className="w-full h-48 object-cover mb-4"
                width={200}
                height={200}
                style={{ aspectRatio: "200 / 200", objectFit: "cover" }}
              />
              <h3 className="text-lg font-semibold mb-2">Product 4</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">$149.99</span>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
    <p className="text-xs text-gray-500 dark:text-gray-400">
      © 2024 Acme Inc. All rights reserved.
    </p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Terms of Service
      </a>
      <a className="text-xs hover:underline underline-offset-4" href="#">
        Privacy
      </a>
    </nav>
  </footer>


    </div>
  )
}

export default HomePage;