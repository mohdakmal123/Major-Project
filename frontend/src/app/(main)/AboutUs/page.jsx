import Image from 'next/image'
import Link from 'next/link'

export default function TinesLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:text-gray-300">Product</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Use cases</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Resources</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Company</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Pricing</Link></li>
              </ul>
            </nav>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Schedule Tour
          </button>
        </div>
      </header>

      <main>
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">No-code automation</h1>
            <p className="text-xl mb-8">Streamline your workflow with our powerful no-code platform</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">How it started</h2>
            <div className="flex justify-between items-start mb-12">
              <div className="w-1/2">
                <div className="flex items-start mb-4">
                  <Image src="/placeholder.svg" alt="User Avatar" width={50} height={50} className="rounded-full mr-4" />
                  <p className="text-gray-600">
                    "Tines has revolutionized our workflow. It's incredibly intuitive and powerful."
                  </p>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex items-start mb-4">
                  <Image src="/placeholder.svg" alt="User Avatar" width={50} height={50} className="rounded-full mr-4" />
                  <p className="text-gray-600">
                    "We've been able to automate complex processes in a fraction of the time it used to take."
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-purple-600 text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">To be the trusted leader in no-code automation</h3>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image src="/placeholder.svg" alt={`Leader ${i}`} width={300} height={300} className="w-full" />
                  <div className="p-4">
                    <h3 className="font-bold">John Doe</h3>
                    <p className="text-gray-600">CEO</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Backed by the best</h2>
            <div className="flex justify-between items-center">
              {['Accel', 'Blossom', 'Lux Capital', 'Addition'].map((investor) => (
                <div key={investor} className="text-gray-400 font-serif text-xl">
                  {investor}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-start">
              <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-4">Join a <br />world-class <br />team</h2>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">
                  View open roles
                </button>
              </div>
              <div className="w-1/2">
                <p className="text-gray-600 mb-4">
                  "Working here has been an amazing experience. The team is incredibly talented and supportive."
                </p>
                <div className="flex items-center">
                  <Image src="/placeholder.svg" alt="Employee Avatar" width={50} height={50} className="rounded-full mr-4" />
                  <div>
                    <p className="font-bold">Jane Smith</p>
                    <p className="text-gray-600">Software Engineer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[1, 2, 3].map((i) => (
                <Image key={i} src="/placeholder.svg" alt={`Office ${i}`} width={400} height={300} className="rounded-lg" />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Our values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Simplicity', description: 'We strive for elegant solutions' },
                { title: 'Speed', description: 'We move fast and iterate quickly' },
                { title: 'Soundness', description: 'We build reliable and robust systems' },
              ].map((value) => (
                <div key={value.title} className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <Image src="/placeholder.svg" alt="Tines Logo" width={100} height={40} className="mb-4" />
            </div>
            {[
              { title: 'Product', links: ['How it works', 'Use cases', 'Pricing'] },
              { title: 'Resources', links: ['Blog', 'Documentation', 'Support'] },
              { title: 'Company', links: ['About', 'Careers', 'Contact'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security'] },
            ].map((column) => (
              <div key={column.title}>
                <h4 className="font-bold mb-2">{column.title}</h4>
                <ul>
                  {column.links.map((link) => (
                    <li key={link} className="mb-1">
                      <Link href="#" className="text-gray-400 hover:text-white">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}