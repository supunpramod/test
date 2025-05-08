import React from "react";
import Logo from "../assets/logo.png";
import SolanaLogo from "../assets/solana-logo.png";
import BitcoinLogo from "../assets/bitcoin-logo.png";
import EthereumLogo from "../assets/ethereum-logo.png";
import XrpLogo from "../assets/xrp-logo.png";
import Logoipsum1 from "../assets/logoipsum1-logo.png";
import Logoipsum2 from "../assets/logoipsum2-logo.png";
import Logoipsum3 from "../assets/logoipsum3-logo.png";
import Logoipsum4 from "../assets/logoipsum4-logo.png";
import Logoipsum5 from "../assets/logoipsum5-logo.png";
import Phone from "../assets/phone.png";
import Logo1 from "../assets/logo1.png";
import Arrow from "../assets/arrow.png";
import Iconx from "../assets/iconx.png";
import Createaccount from "../assets/createaccount.png";
import Verifybank from "../assets/verifybank.png";
import Addfound from "../assets/addfound.png";
import Starttrending from "../assets/starttrending.png";
import Windows from "../assets/windows.png";
import GooglePlay from "../assets/playstory.png";
import Apple from "../assets/apple.png";
import Admin from "../assets/admin.png";


const Home = () => {
  const categories = [
    "Shares",
    "Forex",
    "Commodities",
    "Indices",
    "Crypto Currencies",
    "Bonds",
    "ETFs",
    "NFTs",
  ];
  const logos = [
    "Logo 1",
    "Logo 2",
    "Logo 3",
    "Logo 4",
    "Logo 5",
    "Logo 6",
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white px-4 sm:px-20 py-4 pb-0">
      {/* Navigation Bar */}
      <nav className="px-4 sm:px-8 py-4">
        <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between space-y-4 md:space-y-0">
          <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={Logo1} className="h-8" alt="Website Logo" />
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <button className="text-white hover:text-yellow-400" aria-label="Buy Crypto">
                Buy Crypto
              </button>
              <button className="text-white hover:text-yellow-400" aria-label="Trade">
                Trade
              </button>
              <button className="text-white hover:text-yellow-400" aria-label="NFT">
                NFT
              </button>
              <button className="text-white hover:text-yellow-400" aria-label="More">
                More
              </button>
            </div>
            {/* Actions */}
            <div className="flex items-center space-x-4 flex-wrap justify-end">
              <button
                className="border border-cyan-500 text-cyan-500 px-4 py-1.5 rounded-full hover:bg-cyan-500/10"
                aria-label="Select Language"
              >
                Select Language
              </button>
              <button
                className="border border-cyan-500 text-cyan-500 px-4 py-1.5 rounded-full hover:bg-cyan-500/10"
                aria-label="Sign In"
              >
                Sign In
              </button>
              <div className="bg-cyan-500/20 rounded-full p-0.5 flex">
                <button className="bg-cyan-500 text-white px-6 py-1.5 rounded-full" aria-label="Real Account">
                  Real
                </button>
                <button
                  className="text-white px-6 py-1.5 hover:text-cyan-400"
                  aria-label="Demo Account"
                >
                  Demo
                </button>
              </div>
              <button
                className="bg-cyan-500 text-white px-6 py-1.5 rounded-full hover:bg-cyan-600 flex items-center space-x-2"
                aria-label="Download App"
              >
                <i className="fas fa-download"></i>
                <span>Download App</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center px-4 sm:px-8 py-16 md:py-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-10 flex flex-col items-start md:items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-lightCyan to-darkCyan bg-clip-text text-transparent">
            Empowering Your <br />
            <span className="bg-clip-text text-transparent">Financial Journey</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl">
            Join the world's biggest & trusted Exchange. Trade in Bitcoin, Ethereum, Ripple, and many more currencies.
          </p>
          <button
            className="bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition"
            aria-label="Start Trading"
          >
            Start Trading
          </button>
          {/* Logos Section */}
          <div className="mt-10 space-y-4">
            {/* First Row */}
            <div className="flex flex-row justify-center md:justify-start gap-6">
              <img src={SolanaLogo} alt="Solana Logo" className="h-6" />
              <img src={Logoipsum1} alt="Logoipsum 1" className="h-6" />
              <img src={BitcoinLogo} alt="Bitcoin Logo" className="h-6" />
              <img src={EthereumLogo} alt="Ethereum Logo" className="h-6" />
              <img src={XrpLogo} alt="XRP Logo" className="h-6" />
            </div>
            {/* Second Row */}
            <div className="flex flex-row justify-center md:justify-start gap-6">
              <img src={Logoipsum2} alt="Logoipsum 2" className="h-6" />
              <img src={Logoipsum3} alt="Logoipsum 3" className="h-6" />
              <img src={Logoipsum4} alt="Logoipsum 4" className="h-6" />
              <img src={Logoipsum5} alt="Logoipsum 5" className="h-6" />
            </div>
          </div>
        </div>
        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
          <div className="relative w-full max-w-md h-[500px] overflow-hidden">
            <img src={Phone} alt="App UI" className="object-contain w-full h-full" />
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="w-full flex justify-center mt-0">
        <img src={Arrow} alt="Scroll Down" className="h-8 w-8 animate-bounce mb-6" />
      </div>

      {/* Category Buttons Section */}
      <div className="text-white pb-10 flex flex-col items-center px-4 sm:px-8 py-4 mt-1">
        <div className="mb-2">
          <img src={Iconx} className="h-8" alt="Icon" />
        </div>
        <div className="text-center mb-2">
          <p className="text-cyan-400 text-sm">Get started with CriptyFX</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Discover & Trade Your Favorite Instruments
        </h1>
        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-full bg-gray-900/80 border border-gray-700 hover:bg-gray-800 transition-colors text-base text-white font-normal px-4 sm:px-8 py-2"
              aria-label={`Select ${category}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Final Red Section */}
      <div className="flex justify-center items-center px-4 sm:px-8 py-4">
        <div className="w-full max-w-screen-xl h-[550px] bg-red-600 flex justify-center items-center rounded-xl">
          <p className="text-white text-xl font-bold text-center">Centered Content</p>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="bg-slate-900 text-white px-4 sm:px-8 py-4">
        <div className="container bg-black mx-auto px-4 py-12 max-w-[1440px] rounded-xl border-2 border-green-500">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-6">
              <p className="text-blue-400 text-sm">Create Profile</p>
              <h1 className="text-3xl md:text-3xl font-bold">Easy Way to Get Started</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum lectus, congue turpis a, bibendum finibus ligula. Nam arcu nunc, dapibus in condimentum non, interdum efferitur justo.
              </p>
              <button
                className="bg-cyan-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition"
                aria-label="Start Trading"
              >
                Start trading
              </button>
            </div>

            {/* Right Section - Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="bg-slate-800/60 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/80 transition-all cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 flex items-center justify-center pt-6">
                    <img src={Createaccount} alt="Create Account" className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium text-lg">Create account</h3>
                  <p className="text-gray-400 text-sm">
                    Sign up with your email/card receive it just 5 minutes
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-slate-800/60 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/80 transition-all cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center pt-6">
                    <img src={Verifybank} alt="Verify Bank" className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium text-lg">Verify Bank Account</h3>
                  <p className="text-gray-400 text-sm">Verify your bank account in East way</p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-slate-800/60 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/80 transition-all cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center pt-6">
                    <img src={Addfound} alt="Add Funds" className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium text-lg">Add Funds to Wallet</h3>
                  <p className="text-gray-400 text-sm">
                    Quickly add money to your investment wallet
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-slate-800/60 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/80 transition-all cursor-pointer">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center pt-6">
                    <img src={Starttrending} alt="Start Trading" className="w-8 h-8" />
                  </div>
                  <h3 className="font-medium text-lg">Start Trading Instantly</h3>
                  <p className="text-gray-400 text-sm">
                    Buy & Sell a variety of top coins at the best prices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-slate-900 text-white px-4 sm:px-8 py-4">
        <div className="container bg-black mx-auto px-4 py-12 max-w-[1440px] rounded-xl border-2 border-green-500">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <div className="space-y-6">
              <p className="text-blue-400 text-sm">Create Profile</p>
              <h1 className="text-3xl md:text-3xl font-bold">Easy Way to Get Started</h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum lectus, congue turpis a, bibendum finibus ligula. Nam arcu nunc, dapibus in condimentum non, interdum efferitur justo.
              </p>
            </div>
            {/* Right Section */}
            <div>
              <div className="max-w-md w-full">
                <div className="mb-6">
                  <span className="text-blue-400 text-sm">Download the app</span>
                  <h1 className="text-2xl font-bold text-white mb-2">Trade anywhere, Anytime</h1>
                  <p className="text-white text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum lacus, congue a turpis a, bibendum finibus lacus. Nam arcu nunc, dapibus in condimentum non, interdum.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {/* Windows with Price */}
                  <div className="bg-[radial-gradient(ellipse_138.35%_226.87%_at_99.97%_99.95%,_#3BD3FF_0%,_#1D5C6E_100%)] rounded-xl p-4 border border-teal-700/50 hover:bg-teal-800/70 transition-colors">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                        <img src={GooglePlay} alt="Windows" className="w-8 h-8" />
                      </div>
                      <div>
                        <p className="text-white text-m font-semibold">Windows</p>
                        <p className="text-white text-xs">Download PC-Client</p>
                      </div>
                    </div>
                  </div>
                  {/* Apple */}
                  <div className="bg-[radial-gradient(ellipse_138.35%_226.87%_at_99.97%_99.95%,_#3BD3FF_0%,_#1D5C6E_100%)] rounded-xl p-4 border border-teal-700/50 hover:bg-teal-800/70 transition-colors">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                        <img src={Apple} alt="Apple" className="w-9 h-9" />
                      </div>
                      <div>
                        <p className="text-white text-m font-semibold">Apple</p>
                        <p className="text-white text-xs">Download App</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[radial-gradient(ellipse_138.35%_226.87%_at_99.97%_99.95%,_#3BD3FF_0%,_#1D5C6E_100%)] rounded-xl p-4 border border-teal-700/50 hover:bg-teal-800/70 transition-colors">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                        <img src={Apple} alt="Apple" className="w-9 h-9" />
                      </div>
                      <div>
                        <p className="text-white text-m font-semibold">Apple</p>
                        <p className="text-white text-xs">Download App</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[radial-gradient(ellipse_138.35%_226.87%_at_99.97%_99.95%,_#3BD3FF_0%,_#1D5C6E_100%)] rounded-xl p-4 border border-teal-700/50 hover:bg-teal-800/70 transition-colors">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                        <img src={Apple} alt="Apple" className="w-9 h-9" />
                      </div>
                      <div>
                        <p className="text-white text-m font-semibold">Apple</p>
                        <p className="text-white text-xs">Download App</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="flex justify-center items-center px-4 sm:px-8 py-4 bg-yellow-300">
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
          
            <div className="text-center mb-12">
              <span className="text-green-400">Benefits</span>
              <h2 className="text-4xl font-bold mb-4">Our Best Service</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum lacus, congue a turpis a, bibendum finibus lacus. Nam arcu nunc, dapibus in condimentum non, interdum eleifend justo.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="bg-gradient-to-b from-blue-900/30 to-blue-900/10 rounded-2xl p-3 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/30 transition-all cursor-pointer group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-15 h-15 rounded-full flex items-center justify-center mb-4 group-hover: transition-all">
                      <img
                        src={Admin}
                        alt="Feature Icon"
                        className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Safety Comes First</h3>
                    <p className="text-gray-400 text-sm">
                      Lorem ipsum dolor sit amet, ut consectetur adipiscing elit. Non semper ut aliquot amet.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          
        </div>
      </div>

      {/* Backed by Investors Section */}
      <div className="flex justify-center items-center px-4 sm:px-8 py-4  ">
      <div className="w-full max-w-screen-xl  bg-red-600 flex flex-col justify-start items-center rounded-xl ">
        {/* h1 එක එකතු කර මැදට ගැනීම */}
        <h1 className="text-3xl font-bold text-white mt-5 mb-4 text-center ">Backed by Investors</h1>
        
        {/* රූප 7 එක පේළියක තැබීමට div එක */}
        <div className="flex flex-row justify-between w-full gap-8 ">
          <img src={SolanaLogo} alt="Solana Logo" className="h-6" />
          <img src={BitcoinLogo} alt="Bitcoin Logo" className="h-6" />
          <img src={EthereumLogo} alt="Ethereum Logo" className="h-6" />
          <img src={XrpLogo} alt="XRP Logo" className="h-6" />
          <img src={Logoipsum1} alt="Logoipsum 1" className="h-6" />
          <img src={Logoipsum2} alt="Logoipsum 2" className="h-6" />
          <img src={Logoipsum3} alt="Logoipsum 3" className="h-6" />
        </div>
        <div className="flex flex-row justify-between w-full gap-8 mt-4 ">
          <img src={SolanaLogo} alt="Solana Logo" className="h-6" />
          <img src={BitcoinLogo} alt="Bitcoin Logo" className="h-6" />
          <img src={EthereumLogo} alt="Ethereum Logo" className="h-6" />
          <img src={XrpLogo} alt="XRP Logo" className="h-6" />
          <img src={Logoipsum1} alt="Logoipsum 1" className="h-6" />
          <img src={Logoipsum2} alt="Logoipsum 2" className="h-6" />
          <img src={Logoipsum3} alt="Logoipsum 3" className="h-6" />
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center px-4 sm:px-8 py-4  ">
    <div className="w-full max-w-screen-xl  bg-red-600 flex flex-col justify-start items-center rounded-xl ">
    
      <div className="w-full max-w-screen bg-gradient-to-b from-[#1a2236] to-[#181c2a] rounded-xl shadow-lg border border-[#2c374f] p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
        {/* Left Side */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Start mining now</h2>
          <p className="text-gray-300 text-sm">
            Join now with DYNAMIC to get the latest news and start mining now
          </p>
        </div>
        {/* Right Side */}
        <form className="flex flex-col md:flex-row items-center gap-4 flex-1 justify-end w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent border-b border-gray-500 outline-none px-2 py-2 text-white placeholder-gray-400 w-full md:w-64"
          />
          <button
            type="submit"
            className="bg-[#232b3e] border border-gray-400 rounded-full px-6 py-2 text-white font-semibold hover:bg-[#2c374f] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    

      </div>
      </div>

      <footer className="flex justify-center items-center px-4 sm:px-8 py-4 pb-0">
      <div className="w-full max-w-screen-xl flex flex-col justify-start items-center rounded-xl">
        <div className="w-full bg-gradient-to-br from-[#0a1a2f] to-[#101c2f] text-[#b6c2d6] p-8 rounded-xl m-4 border border-[#1e2a3a]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
            {/* Logo සහ Description */}
            <div className="flex-1 min-w-[220px]">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-bold text-cyan-400">X</span>
                <span className="text-xl font-semibold text-white">CriptyFX</span>
              </div>
              <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet, congue egestas nisl condimentum adipiscing elit. 
                Nibh antean aliquet amet, neque ut maecenas. Lorem sed egestas nisl condimentum.
              </p>
              <div className="flex gap-4 text-xl">
                <a href="#">cc</a>
                <a href="#">cc</a>
                <a href="#">cc</a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="flex flex-1 justify-between flex-wrap gap-8">
              <div>
                <h4 className="text-white font-semibold mb-2">Exchange</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="#">Exchange Home</a></li>
                  <li><a href="#">Margin Trading</a></li>
                  <li><a href="#">Derivatives Trading</a></li>
                  <li><a href="#">Supercharger</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Support</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="#">Request form</a></li>
                  <li><a href="#">Contact Support</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Security</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Resources</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="#">Downloads</a></li>
                  <li><a href="#">Desktop Application</a></li>
                  <li><a href="#">Buy Crypto</a></li>
                  <li><a href="#">Referral</a></li>
                  <li><a href="#">Listing Trading</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Learn</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="#">What's Trending</a></li>
                  <li><a href="#">Product News</a></li>
                  <li><a href="#">Events</a></li>
                  <li><a href="#">University</a></li>
                  <li><a href="#">Research</a></li>
                  <li><a href="#">Market Update</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">Company</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="#">About us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Community</a></li>
                  <li><a href="#">Announcements</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#22304a] my-6"></div>

          {/* Bottom Row */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex-1 flex flex-wrap gap-4">
              <span>© 2022 dynamic. All rights reserved</span>
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
            <div className="flex gap-2">
              <button className="bg-[#22304a] px-3 py-1 rounded text-white flex items-center gap-1">
                <span>Windows</span>
              </button>
              <button className="bg-[#22304a] px-3 py-1 rounded text-white flex items-center gap-1">
                <span>Windows</span>
              </button>
              <button className="bg-[#22304a] px-3 py-1 rounded text-white flex items-center gap-1">
                <span>Windows</span>
              </button>
              <button className="bg-[#22304a] px-3 py-1 rounded text-white flex items-center gap-1">
                <span>Apple</span>
              </button>
              <button className="bg-[#22304a] px-3 py-1 rounded text-white flex items-center gap-1">
                <span>Windows</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>

      

    </div>

    
  );
};

export default Home;
