import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Mapsted <span>2019-present</span></h2>
                        <p>I joined Mapsted Corp. in 2019 where I started working as the only Human Resources Executive. Here I was given the opportunity to work within other teams and I started learning about software development. I had the opportunity to work with experienced Front-end developers to work on company websites and applications. I also started working with back-end technologies such as NodeJS. </p>
                        <p>Provided project updates to the leadership team and offered recommendations for design.</p>
                        <p>Participated in writing scalable code with the software team for client applications.</p>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Work in HR <span>2012-2020</span></h2>
                        <p>I started working in Human Resources after graduating from University. I worked in multiple companies across the world. I gained valuable experience in dealing with employees and managers and I worked collabaratively in teams and also on individual projects.</p>
                      <p>I took a course from the University of Cornell for Human Resources Management in 2016.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>University Education <span>2009-2012</span></h2>
                        <p>I completed my higher education with major subjects in Mathematics and Business. During my time at University, I developed an interest in solving complex problems which helped me improve my understanding of any problem.</p> 
                      <p>I studied Financial Mathematics with Business at Kingston University, London in the UK.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
