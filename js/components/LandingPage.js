import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export default function LandingPage(props) {
	return (
		<section class="hero is-success is-fullheight">
        	<div className="hero-head">)
				<div className="hero-body">
    			<div className="container has-text-centered">
      				<h1>{props.LPTitle></h1>
      				</h2>
      				<div>
      					<p>{props.Explanation}</p>
      				</div>
      				<Link to={'/Content/' + props.id}>
      					{props.name}
      				</Link>
    			</div>
  				</div>
  			</div>
  		</section>
}