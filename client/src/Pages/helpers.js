import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  
const Helpers = () => {
  return (
    <>
    <div id="helpers" className="information">
      <h1>Meet The Helpers!</h1>
      <p>These group of people help to manage the sites! They are mostly reponsible for approving the modules
        used here in this site, as well as contributing the codes.</p>
    </div>
    <div className='card'>
        <h2>YS</h2>
        <p class="title">Adminstrator / Current Chemistry Undergraduate</p>
        <p>He created this site as part of his CS50x project,
          in hopes that his coursemates will use this site!</p>
        <div class="social-links">
          <h6>Email: yusiangseah99@u.nus.edu</h6>
          <h6>Telegram: @yusiang_seah</h6>
          <h6>Github: @YSSeah99</h6>
          <h6>Connect with him via LinkedIn !</h6>
          <p>[Social Links to Be Updated. Lol.]</p>
        </div>
    </div>
    <div id="helpers" className="information">
      <h3>Want to contribute?</h3>
      <p className="applink">Do register your interest <Link to="/helperform">here!</Link></p>
    </div>
    </>
  );
};
  
export default Helpers;