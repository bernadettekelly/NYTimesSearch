import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export default function LandingPage(props) {
  return (
    <section className="hero is-dark is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1>{props.LPTitle}</h1>
            <p>{props.Explanation}</p>
            <Link to="search">Begin</Link>
          </div>
        </div>
  	</section>
  );
}
