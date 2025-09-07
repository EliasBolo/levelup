import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Headerfour = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);
  const router = useRouter()
  
  // Check if we're on English version  
  const isEnglish = router.asPath.startsWith('/en')
  const currentLang = isEnglish ? 'en' : 'el'

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    router.events.on('routeChangeStart', removeActive);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      router.events.off('routeChangeStart', removeActive);
    };
  }, [router.events]);





  function closeAllMenus() {
    let elements = document.querySelectorAll(".menu-item-has-children.open, .language-switcher.open, .mobile-language-switcher.open");
    elements.forEach((item) => {
      item.classList.remove('open')
      const submenu = item.querySelector('.submenu');
      if (submenu) {
        submenu.style.display = 'none'
      }
    })
  }
  function toggleSearchField() {
    document.querySelector(".searchbar")?.classList.toggle("show");
  }

  // ...........main menu...............

  const toggleMenu = () => {
    setActiveMenu(!activeMenu)
    closeAllMenus()
  }
  //............submenu...............
  function removeActive() {
    window.onload = function() {
      const element = document.getElementById("menu");
      if (element) {
        element.classList.remove("active");
      }
      const icon = document.getElementById("icon");
      if (icon) {
        icon.classList.remove("active");
      }
    };
  }
  

  function toggleActive(event) {
    event.preventDefault()
    const mediaQuery = window.matchMedia('(max-width: 991px)');

    if (mediaQuery.matches) {
      // submenu open
      event.currentTarget.parentElement.classList.toggle('open')
      const submenu = event.currentTarget.nextElementSibling;
      if (!submenu.style.display || submenu.style.display === 'none') {
        submenu.style.display = "block"
      } else {
        submenu.style.display = "none"
      }
    }
  }
return (

    <>
    
    {/* Skip Navigation Links */}
    <div className="skip-links">
      <a href="#main-content" className="skip-link">
        {isEnglish ? "Skip to main content" : "Μετάβαση στο κύριο περιεχόμενο"}
      </a>
      <a href="#navigation" className="skip-link">
        {isEnglish ? "Skip to navigation" : "Μετάβαση στην πλοήγηση"}
      </a>
    </div>
    
    <header
    className={`header-section brand-4 home4 ${scrollPosition > 100 ? 'header-fixed fadeInUp' : ""} `}
    role="banner"
  >
    <div className="header-bottom">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-start header-start--style1">
            <div className="logo">
              <Link href="/">
                <img src="/images/logo/color_logo.webp" alt="logo" style={{width: '200px', filter: 'drop-shadow(-0.5px -0.5px 0 white) drop-shadow(0.5px -0.5px 0 white) drop-shadow(-0.5px 0.5px 0 white) drop-shadow(0.5px 0.5px 0 white)'}} />
              </Link>
            </div>
            <div className="menu-area">
              <nav role="navigation" aria-label={isEnglish ? "Main navigation" : "Κύρια πλοήγηση"} id="navigation">
              <ul className= {
                    activeMenu
                      ? "menu menu--style1 active"
                      : "menu menu--style1"
                  } role="menubar">
                <li>
                  <Link href={isEnglish ? "/en" : "/"}>{isEnglish ? "Home" : "Αρχική"}</Link>
                </li>
                <li className="menu-item-has-children">
                  <Link href="#" onClick={toggleActive}>
                    {isEnglish ? "Courses" : "Μαθήματα"}
                  </Link>
                  <ul className="submenu">
                    <li><Link href={isEnglish ? "/en/english-faq" : "/el/english-faq"}>{isEnglish ? "English" : "Αγγλικά"}</Link></li>
                    <li><Link href={isEnglish ? "/de/german-faq" : "/el/german-faq"}>{isEnglish ? "German" : "Γερμανικά"}</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href={isEnglish ? "/en/about" : "/about"}>{isEnglish ? "About Us" : "Σχετικά με εμάς"}</Link>
                </li>
                <li>
                  <Link href={isEnglish ? "/en/contact" : "/contact"}>{isEnglish ? "Contact Us" : "Επικοινωνία"}</Link>
                </li>
                <li className="language-switcher d-none d-xl-block">
                  <Link href="#" onClick={toggleActive}>
                    <span>🌐 {isEnglish ? "EN" : "EL"}</span>
                  </Link>
                  <ul className="submenu">
                    <li><Link href="/en">🇺🇸 English</Link></li>
                    <li><Link href="/">🇬🇷 Ελληνικά</Link></li>
                  </ul>
                </li>
              </ul>
              </nav>
            </div>
          </div>
          <div className="header-end">
              <div className="menu-area">
                <div className="header-btn d-none d-md-block">
                  <Link href={isEnglish ? "/en/contact" : "/contact"}
                    className="trk-btn trk-btn--rounded trk-btn--primary4 trk-btn--style2"
                  >
                    <span>{isEnglish ? "Sign Up" : "Επικοινωνία"}</span>
                  </Link>
                </div>
                
                {/* Mobile Language Switcher */}
                <div className="mobile-language-switcher d-xl-none" style={{marginRight: '15px'}}>
                  <Link href="#" onClick={toggleActive} style={{
                    color: 'white',
                    fontSize: '16px',
                    textDecoration: 'none',
                    background: 'rgba(255,255,255,0.1)',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}>
                    <span>🌐 {isEnglish ? "EN" : "EL"}</span>
                  </Link>
                  <ul className="submenu" style={{
                    position: 'absolute',
                    top: '100%',
                    right: '0',
                    background: 'white',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    borderRadius: '6px',
                    minWidth: '150px',
                    zIndex: '1000',
                    display: 'none'
                  }}>
                    <li style={{padding: '0'}}><Link href="/en" style={{color: '#333', padding: '10px 15px', display: 'block', textDecoration: 'none'}}>🇺🇸 English</Link></li>
                    <li style={{padding: '0'}}><Link href="/" style={{color: '#333', padding: '10px 15px', display: 'block', textDecoration: 'none'}}>🇬🇷 Ελληνικά</Link></li>
                  </ul>
                </div>
             
                <button 
                  className={activeMenu ? "header-bar d-xl-none home4 active" : "header-bar d-xl-none home4"} 
                  onClick={toggleMenu}
                  aria-label={isEnglish ? "Open navigation menu" : "Άνοιγμα μενού πλοήγησης"}
                  aria-expanded={activeMenu}
                  aria-controls="navigation"
                  type="button"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '10px 8px',
                    zIndex: '1001'
                  }}
                >
                  <span style={{background: 'white'}}></span>
                  <span style={{background: 'white'}}></span>
                  <span style={{background: 'white'}}></span>
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  </header>
  <div className="searchbar" role="search" aria-label={isEnglish ? "Search" : "Αναζήτηση"}>
      <div className="searchbar__wrapper">
        <div className="searchbar__inner">
          <form className="form form-subscribe" role="search">
            <div className="input-group">
              <label htmlFor="search-input" className="sr-only">
                {isEnglish ? "Search content" : "Αναζήτηση περιεχομένου"}
              </label>
              <input
                id="search-input"
                type="text"
                className="form-control style1"
                placeholder={isEnglish ? "Search now..." : "Αναζήτηση..."}
                aria-label={isEnglish ? "Enter search terms" : "Εισάγετε όρους αναζήτησης"}
              />
              <span className="input-group-btn">
                <button
                  className="trk-btn search-btn trk-btn--primary3"
                  type="submit"
                  aria-label={isEnglish ? "Search" : "Αναζήτηση"}
                >
                  {isEnglish ? "Search" : "Αναζήτηση"}
                </button>
              </span>
            </div>
          </form>
        </div>
        <button 
          className="searchbar__close" 
          onClick={toggleSearchField}
          aria-label={isEnglish ? "Close search" : "Κλείσιμο αναζήτησης"}
          type="button"
        >
          ✕
        </button>
    </div>
    </div>

</>
);
};
export default Headerfour;
