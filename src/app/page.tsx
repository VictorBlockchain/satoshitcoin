import Image from 'next/image'
import { Twitter, Send, Megaphone } from 'lucide-react'

const CollagePanel = ({ children, className = "", rotate = 0, borderStyle = "border-solid", borderColor = "border-gray-900" }: { 
  children: React.ReactNode, 
  className?: string, 
  rotate?: number,
  borderStyle?: string,
  borderColor?: string
}) => (
  <div 
    className={`bg-white border-4 ${borderStyle} ${borderColor} p-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] transform ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    {children}
  </div>
)

const SuspectPhoto = ({ name, image }: { name: string, image: string }) => (
  <div className="bg-gray-200 p-2 border-2 border-gray-900 transform rotate-1 hover:rotate-0 transition-transform duration-300">
    <Image 
      src={image} 
      alt={name} 
      width={200} 
      height={200}
      className="grayscale border-4 border-white rounded-lg shadow-md"
    />
    <div className="mt-2 font-shadows text-center">{name}</div>
  </div>
)

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-gray-200 border-4 border-gray-900 shadow-[16px_16px_0_0_rgba(0,0,0,1)] overflow-hidden">
        {/* Newspaper Header */}
        <header className="bg-white border-b-4 border-gray-900 p-4 transform -rotate-1">
          <h1 className="font-bangers text-6xl md:text-8xl text-center">The Daily Shitcoin</h1>
          <p className="font-marker text-center text-xl mt-2">All the news that&#39;s fit to HODL - Est. 2024</p>
        </header>

        {/* Announcement Section styled as a newspaper ad */}
        <div className="mx-8 my-8 relative">
          <div className="absolute -top-4 -left-4 w-20 h-8 bg-gray-300 transform -rotate-45 z-10"></div>
          <div className="absolute -top-4 -right-4 w-20 h-8 bg-gray-300 transform rotate-45 z-10"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-8 bg-gray-300 transform rotate-45 z-10"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-8 bg-gray-300 transform -rotate-45 z-10"></div>
          <div className="bg-yellow-100 border-8 border-dashed border-gray-800 p-6 transform rotate-1 relative z-0">
            <div className="flex items-center justify-center">
              <Megaphone className="w-24 h-24 mr-4 text-red-500 animate-pulse" />
              <div>
                <h2 className="font-bangers text-5xl md:text-7xl mb-2 text-red-500">SatoshitCoin</h2>
                <p className="font-marker text-2xl md:text-3xl text-gray-800">The Genius Shitcoin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Collage Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative">
        <CollagePanel 
          className="bg-pink-200 relative min-h-[300px]" 
          rotate={-2} 
          borderStyle="border-dotted" 
          borderColor="border-purple-500"
        >
          <Image 
            src="/satoshitcoin.jpeg" 
            alt="Satoshitcoin Logo" 
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0"
          />
        </CollagePanel>

          

          <CollagePanel className="bg-green-200" rotate={2} borderStyle="border-dashed" borderColor="border-yellow-500">
            <h3 className="font-bangers text-2xl mb-2 text-center">Moon-Ready Tokenomics</h3>
            <div className="space-y-2 font-shadows text-lg">
            <p className="text-center" style={{fontSize:'21px'}}>Not Your Average Shitcoin<br/>
            Satoshitcoin is the lovechild of Bitcoin&#39;s mysterious creator... It&#39;s serious business,<br/> but not really.</p>
              <p className="text-center" style={{fontSize:'21px'}}>With a supply of 21 million trillion billion (we lost count), Satoshitcoin is ready to hit a market cap higher than the GDP of the entire galaxy.</p>
            </div>
          </CollagePanel>
          
          <CollagePanel className="bg-blue-200 " rotate={-1} borderStyle="border-double" borderColor="border-red-500">
            <h3 className="font-bangers text-2xl mb-2 text-center">How to Buy Satoshitcoin</h3>
            <ol className="list-decimal list-inside font-indie text-lg text-center" style={{fontSize:'21px'}}>
              <li style={{fontSize:'21px'}} className="mb-3">If you are a girl, grab your tits</li>
              <li style={{fontSize:'21px'}} className="mb-3">If you are a guy, grab your balls</li>
              <li style={{fontSize:'21px'}} className="mb-3">open your phantom wallet</li>
              <li style={{fontSize:'21px'}}className="mb-3">swap solana for SATOSHiT</li>
              <li style={{fontSize:'21px'}}>Hold & become a shitcoin baller!</li>
            </ol>
          </CollagePanel>

          <CollagePanel className="bg-purple-200 flex flex-col justify-center min-h-[300px]" rotate={1} borderStyle="border-dotted" borderColor="border-green-500">
          <Image 
            src="/shit_coin_baller_3.jpeg" 
            alt="Satoshitcoin Logo" 
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0"
          />
          </CollagePanel>
          
          <CollagePanel className="bg-yellow-200 min-h-[300px]" rotate={-2} borderStyle="border-dashed" borderColor="border-blue-500">
          <Image 
            src="/shit_coin_baddies_1.jpeg" 
            alt="Satoshitcoin Logo" 
            fill
            style={{ objectFit: "cover" }}
            className="absolute inset-0"
          />
            <p className="text-center mt-2 font-indie text-lg">We&#39;re definitely going somewhere!</p>
          </CollagePanel>

          <CollagePanel className="bg-red-200 flex flex-col justify-center" rotate={2} borderStyle="border-double" borderColor="border-pink-500">
            <p className="text-center text-xl font-shadows">&#39;&#39;Our technology is powered by pure hopium and the tears of Bitcoin maximalists&#39;&#39;</p>
            <p className="text-center italic mt-2 font-indie">- Satoshitcoin Lead Developer</p>
          </CollagePanel>
        
        </div>

        {/* Suspected Satoshis Section */}
        <CollagePanel className="mx-8 mb-8 bg-orange-200" rotate={1} borderStyle="border-dotted" borderColor="border-indigo-500">
          <h2 className="font-bangers text-4xl mb-4 text-center">Suspected Satoshis</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SuspectPhoto name="Craig Wright" image="/satoshi_1.jpeg"  />
            <SuspectPhoto name="Dorian Nakamoto" image="/satoshi_4.jpeg" />
            <SuspectPhoto name="Nick Szabo" image="/satoshi_2.jpeg" />
            <SuspectPhoto name="Hal Finney" image="/satoshi_3.jpeg" />
          </div>
        </CollagePanel>

        {/* YouTube Video Section */}
        <CollagePanel className="mx-8 mb-8 bg-lime-200" rotate={-1} borderStyle="border-dashed" borderColor="border-green-500">
          <h2 className="font-bangers text-4xl mb-4 text-center">shit coin baller Anthem</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/otLlgaTF9Ag?si=EeQpYvRwhH58BA5u"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </CollagePanel>
        
        {/* YouTube Video Section */}
          <CollagePanel className="mx-8 mb-8 bg-lime-200" rotate={1} borderStyle="border-dashed" borderColor="border-orange-500">
          <h2 className="font-bangers text-4xl mb-4 text-center">shit coin Anthem</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </CollagePanel>
        {/* Call to Action */}
        <div className="bg-yellow-300 border-t-4 border-b-4 border-gray-900 p-4 text-center transform rotate-1">
          <h2 className="font-bangers text-4xl mb-2">Ready to become a shitcoin baller?</h2>
          <p className="text-xl mb-4 font-shadows">Join the Satoshitcoin community today!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform transition-transform hover:scale-105">
            Ape in now!
          </button>
        </div>

        {/* Footer */}
        <footer className="bg-white p-6 text-center border-t-4 border-gray-900 transform -rotate-1">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://x.com/satoshit_coin" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://t.me/satoshit_coin" className="text-gray-900 hover:text-gray-600 transition-colors duration-200">
              <Send className="w-6 h-6" />
            </a>
          </div>
          <p className="text-sm font-indie">© 2024 satoshitcoin.com | No rights reserved. DYOR (or don&#39;t, we don&#39;t care).</p>
          <p className="text-sm font-indie">satoshitcoin is a meme token with no intrinsic value, no promise of financial gain. Not financial advice.</p>
        
        </footer>
      </div>
    </main>
  )
}

