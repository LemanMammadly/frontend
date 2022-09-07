import React  from 'react'
import { useLocation } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const { pathname } = useLocation();
    if (pathname === "/admin") return null;
    else if (pathname === "/sliderDetail") return null;
    else if (pathname === "/addSlider") return null;
    else if (pathname === "/updateSlider") return null;
    else if (pathname === '/addphotos') return null;
    else if (pathname === '/photosDetail') return null;
    else if (pathname === '/addproducts') return null;
    else if (pathname === '/productdetail') return null;
    else if (pathname === '/productdetail') return null;

  return (
    <header>
        <div className="container">
            <div className="row all py-4 justify-content-between">
                <div className="left col-lg-3 col-5">
                    <img src="data:image/webp;base64,UklGRtgBAABXRUJQVlA4TMwBAAAvd4AGEM9AkG1ThTndX+sKAoEkhf259hEIpDiFSTbINtL5u53CIXwRPpHq4eyDAwAMMBQgS7atto72lQi6EqGd7fkPFbig585fEf2fAL57kn7kV/uNZOX+n8upTtqgxZbUS7upzlyHiEg8J06V9tAbolqhHGL2ZZScmEMyeCdDVwznJkZdljBnmU49ldliMO+lV73YXX0E/NRWmktmPWvEd6qTWVcfIU2Jb9zUuUpyE2U+rok6TgB+SgpUmd3qsgNIsrIssWqTRLQNI4UyUIBLtwPboToKQBiECjo4HoFEXwcH1EHQQlttF6CDHdh6nlZ77jHUiT0Cvtd1emHaAIoly9oHyE6mA5BNIuKyJTRY0qJyW9lk3gOk3SZbNsSfhJdVcOpuEX9DXlTh6+3p6enDkrBW6bsCyZYLbdbYk7qOrbdluoX+51P39ceaPDiB0xbE6wVwDsoNsSdyqKrucvZeek8fa8rAVdJmqjJfb8ijsTZfT8PXNWw9e6Nzjhs4pkSBz9Hzorhqn7tuwU+JwtfodVHZLN5wybRyD2HGFeBl8LGIvI/OaEB3m0vcxeVMB+1X75VVoKE5MiYoqr2gmfYmSOo7URl+vT89PX0A" alt="" />
                </div>
                <div className="row center col-lg-6">
                    <div className="all-link">
                        <a href="/">Home</a>
                        <a href="/shop">Shop</a>
                        <a className="red" href="/sale">Sale</a>
                        <a href="/features">Features</a>
                        <a href=".blog">Blog</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
                <div className="right col-lg-3 text-end col-5 col-sm-4 col-md-3 justify-content-between">
                    <i className="fa-solid fa-circle-user mx-4"></i>
                    <i className="fa-solid fa-bag-shopping second"></i>
                    <i className="fa-solid fa-bars res"></i>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header