import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './images/logo.png';
import logo1 from './images/img2.png';
import logo2 from './images/img3.png';
import logo3 from './images/img4.png';
import logo4 from './images/img5.png';
function Demo() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
        <h1>NEWS FLASH</h1>
        </div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/">News</a>
          <a href="/">Sport</a>
          <a href="/">Reel</a>
          <a href="/">Worklife</a>
          <a href="/">Travel</a>
          <a href="/">Future</a>
        </nav>
        <div className="date">
          <p>Saturday, 24 August</p>
        </div>
      </header>
      <div className="main-news">
        <div className="headline">
          <img src={logo}></img>
          <h2>Thousands flee hotels on Rhodes as fires spread</h2>
          <p>Europe</p>
        </div>
        <div className="sub-news">
          <div className="sub-news-item">
            <img src={logo1}></img>
            <h3>Earth in uncharted waters as climate records tumble</h3>
            <p>Science & Environment</p>
          </div>
          <div className="sub-news-item">
            <img src={logo2}></img>
            <h3>Polarised Spain eyes the hard-right ahead of vote</h3>
            <p>Europe</p>
          </div>
          <div className="sub-news-item">
            <img src={logo3}></img>
            <h3>Root strikes but Ashes hopes hang in the balance</h3>
            <p>Cricket</p>
          </div>
          <div className="sub-news-item">
            <img src={logo4}></img>
            <h3>Festival axed as singer attacks Malaysian LGBT laws</h3>
            <p>Asia</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>Top Categories</h4>
            <ul>
              <li><a href="/">Explained News</a></li>
              <li><a href="/">Delhi News</a></li>
              <li><a href="/">Health News</a></li>
              <li><a href="/">Latest News</a></li>
              <li><a href="/">Mobile & Tabs</a></li>
              <li><a href="/">Political Pulse</a></li>
              <li><a href="/">Pune News</a></li>
              <li><a href="/">India News</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>&nbsp;</h4> Empty header for alignment
            <ul>
              <li><a href="/">Cricket</a></li>
              <li><a href="/">Food & Wine</a></li>
              <li><a href="/">Latest Opinion</a></li>
              <li><a href="/">Bangalore News</a></li>
              <li><a href="/">Sports News</a></li>
              <li><a href="/">Tech Reviews</a></li>
              <li><a href="/">Elections 2024</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <ul>
              <li><a href="/">Mumbai News</a></li>
              <li><a href="/">Bollywood News</a></li>
              <li><a href="/">Lifestyle News</a></li>
              <li><a href="/">Gadgets</a></li>
              <li><a href="/">Fitness</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Trending News</h4>
            <ul>
              <li><a href="/">Latest News</a></li>
              <li><a href="/">Entertainment News</a></li>
              <li><a href="/">Why Subscribe Indian Express</a></li>
              <li><a href="/">Income Tax Calculator</a></li>
              <li><a href="/">Health And Wellness</a></li>
              <li><a href="/">Trending News</a></li>
              <li><a href="/">Buy Digital Premium</a></li>
            </ul>
          </div>
          <div className="footer-column"> 
            <ul>
              <li><a href="/">Stock Market</a></li>
              <li><a href="/">Education News</a></li>
              <li><a href="/">Political News</a></li>
              <li><a href="/">Buy All-Access Plan</a></li>
              <li><a href="/">Business News</a></li>
              <li><a href="/">Subscribe To The Indian Express</a></li>
              <li><a href="/">Indian Express Subscription UPSC Offer</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.render(<Demo/>,document.getElementById("root"));
