/*
 *   Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 *  Licensed under the Apache License, Version 2.0 (the "License").
 *  You may not use this file except in compliance with the License.
 *  A copy of the License is located at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  or in the "license" file accompanying this file. This file is distributed
 *  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *  express or implied. See the License for the specific language governing
 *  permissions and limitations under the License.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import DynamicImage from '../components/DynamicImage';
import EmailSignUp from '../components/EmailSignUp';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';

import '../css/main.css';

const AboutSection = () => (
  <section className="home-about">
    <div className="row column large-9 xlarge-6 xxlarge-4">
      <h2 className="section-title">How Does This Work?</h2>
      <p className="content">
        Seriously, why do all websites need some BS block of buzzword text. We are here to make sure you can quickly and legally order marijuana for delivery. Why wait to get high? The on-demand dealers of old are gone. Time to get with the new generation and order your weed through an app just like you do everything else.
      </p>
    </div>
    <div className="row medium-up-2 large-up-4">
      <div className="column">
        <div className="home-about-block">
          <h3 className="title icon-download">Download The App</h3>
          <p className="content">Head over to the app store and download the U4W app. You’re just a few taps away from getting your ass high as fuck.</p>
        </div>
      </div>
      <div className="column">
        <div className="home-about-block">
          <h3 className="title icon-unicorn">Request your Sack</h3>
          <p className="content">We can get you high wherever you are. Simply request the dank on the app and we'll connect you with a mobile dispensary immediately.</p>
        </div>
      </div>
      <div className="column">
        <div className="home-about-block">
          <h3 className="title icon-price">Pay some money</h3>
          <p className="content">The money you pay will go to helping farmers send their kids to college and pay for the stuff you exepect in the overhead costs it takes to deliver the weed to you. </p>
        </div>
      </div>
      <div className="column">
        <div className="home-about-block">
          <h3 className="title icon-success">Smoke it out!</h3>
          <p className="content">After you have selected the products you would like delivered we will rapidly depoly a licensed dispensary driver to deliver your weed products of choice.</p>
        </div>
      </div>
    </div>
  </section>
);

const StorySection = () => (
  <section className="home-story">
    <div className="row column large-9 xlarge-6 xxlarge-4">
      <h2 className="section-title">Our Story</h2>
      <p className="content">
        U4W was started by a random dude and his buddy, a software developer. The two long-time friends happened upon the U4W idea after seeing how much money venture capitalists are throwing at bullshit projects with no vision or focus. The marijuana industry is only expanding nationwide and to succeed in that vertical, tech companies should be focusing on building a lasting framework for the business ranther than trying to quickly cash out. Using the founders’ respective expertise in, weed smoking, taxi driving, systems administration and software engineering, U4W was formed and has since raised fuckloads of venture capital that they are definitely not spending on cocaine and hookers (they are too old for that shit).
      </p>
    </div>
  </section>
);

const SignUpSection = () => (
  <section className="home-sign-up">
    <div className="row column">
      <DynamicImage src="wr-home-W.png"/>
      <EmailSignUp/>
      <div className="apps">
        <a className="app-icon" href=""><DynamicImage src="wr-home-apple.png"/></a>
        <a className="app-icon" href=""><DynamicImage src="wr-home-google.png"/></a>
      </div>
      <div className="social">
        <a className="icon-fb" href="">Facebook</a>
        <a className="icon-tw" href="">Twitter</a>
        <a className="icon-ig" href="">Instagram</a>
        <a className="icon-wc" href="">Wechat</a>
        <a className="icon-wb" href="">Weibo</a>
      </div>
    </div>
  </section>
);

const QuoteSection = () => (
  <section className="home-quote">
    <div className="row column medium-8 xxlarge-6">
      <div className="quote-wrap">
        <div className="quote">
          “I was almost late to my ultimate frisbee tournament in DOLORES park. BUt U4W Got me there from the marina in under five minutes.”
        </div>
        <div className="quoter">- Satisfied U4W User</div>
      </div>
    </div>
  </section>
);

const KrakenSection = () => (
  <section className="kraken-callout">
    <div className="row">
      <div className="columns medium-6 xxlarge-4 xxlarge-offset-2">
        <DynamicImage src="wr-home-kraken.png"/>
      </div>
      <div className="columns medium-6 xlarge-5 xxlarge-4">
        <h4 className="title">Coming Soon</h4>
        <p className="content">
          Some cool stuff for the future here.
        </p>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="page-home">
      <header className="site-header">
        <h1 className="title">U4W</h1>
        <SiteNav/>
        <Link className="home-button" to="/app">
          Giddy Up!
        </Link>
      </header>
      <AboutSection/>
      <StorySection/>
      <SignUpSection/>
      <QuoteSection/>
      <KrakenSection/>
      <SiteFooter/>
    </div>
  );
};

export default Home;
