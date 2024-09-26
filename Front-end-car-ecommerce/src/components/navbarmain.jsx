import { useState, useEffect } from 'react';
import Navbar from './navbar';

function NavbarMain() {
  // const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // const handleBurger = () => {
  //   setOpen(!open);
  // };

  const handleScroll = () => {
    // console.log('Scroll position:', window.scrollY); // เพิ่มการ console.log เพื่อตรวจสอบตำแหน่งการเลื่อน
    if (window.scrollY > 430) {
      // console.log('Scrolled: true'); // ตรวจสอบว่าเงื่อนไขเป็นจริง
      setScrolled(true);
    } else {
      // console.log('Scrolled: false'); // ตรวจสอบว่าเงื่อนไขเป็นเท็จ
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`fixed top-0 w-full text-white z-20 transition-colors duration-700 ${scrolled ? 'bg-[#1E3769]' : 'bg-black bg-opacity-20'}`}
    />
  );
}

export default NavbarMain;
