import React from 'react'
import Link from 'gatsby-link'
import { Button, Grid, Col, Carousel, Row } from 'react-bootstrap'

const IndexPage = () => (
  <div className={'main'}>
    <section className={'intro'} style={{'background-image':'url(../images/background.png)', 'background-size':'cover', 'background-position':'bottom', }}>
      <div className={'intro-content container-fluid'}>
        <img className={'arslan-img'} src={'../images/arslan.png'} />
        <div className={'intro-frame'}>
          <h1 className={'text-right'}>Pakistan's Leading <br /> Real Estate <br /> Investment <br /> Advisor</h1>
          <a className={'text-right'}><strong>L</strong>earn-<strong>M</strong>ore</a>
          <img src={'../images/frame.png'} />
        </div>
        {/*<Link to="/page-2/">Go to page 2</Link>*/}
      </div>
    </section>
    <section className={'about'}>
      <Grid id={'about'} className={'about-1'}>
        <div>
          <h1 className={'about-heading'}><strong>A LITTLE ABOUT ME</strong></h1>
          <p className={'about-para'}>Having Worked as the CEO and founder at Enekon, Arslan Javed has revolutionized the architectural paradigm. Armed with 7 years of exceptional experience in projection mapping and virtual reality, Arslan Javed has worked on projects all over the world and is well suited to lead a passionate team of architects and software engineers as the director of Graana artec.</p>
          {/*<p className={'about-para'}></p>*/}
        </div>
        <img src={'../images/thumb.png'} />
      </Grid>
      <div style={{'width':'100%', }}>
        <img className={'about-1-img'} src={'../images/thumb.png'} />
      </div>
      <div id={'mission'} className={'about-2'}>
        <Grid className={'child'}>
          <Row className={'text-center'}>
            <h1 className={'about-heading'}><strong>MY MISSION</strong></h1>
            <p className={'about-para'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.</p>
          </Row>
          <Row>
            <Col xs={6} md={4}>
              <img className={'img-responsive'} src={'../images/thumb-2.png'} />
              <h4><strong>OVERSEAS PAKISTANIS RETURN</strong></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.</p>
            </Col>
            <Col xs={6} md={4}>
              <img className={'img-responsive'} src={'../images/thumb-3.png'} />
              <h4><strong>GAMECHANGER IN REALESTATE</strong></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.</p>
            </Col>
            <Col xs={6} md={4}>
              <img className={'img-responsive'} src={'../images/thumb-4.png'} />
              <h4><strong>AMAZON MALL</strong></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet. Id enim volumus, id contendimus, ut officii fructus sit ipsum officium.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
    <section id={'contact'} className={'contact'}>
      <Grid>
        <div className={'contact-heading'}>
          <h2 className={'ch-1'} style={{'color':'white', }}><strong>Looking for a First-Class<br /> Real Estate <span style={{'color':'#EF5350', }}>Investment Advisor</span></strong></h2>
          <h2 className={'ch-2'} style={{'color':'white', 'font-size':'28px', }}><strong>Looking for a<br /> First-Class<br /> Real Estate <span style={{'color':'#EF5350', }}>Investment Advisor</span></strong></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si alia sentit, inquam, alia loquitur, numquam intellegam quid sentiat; Virtutis, magnitudinis animi, patientiae, fortitudinis fomentis dolor mitigari solet.</p>
          <button className={'contact-btn'}><strong>Contact Now</strong></button>
        </div>
        <img src={'images/arslan-2.png'} />
      </Grid>
    </section>
    <section id={'quotes'} className={'text-center quotes'}>
      <Grid>
        <img src={'../images/quote-logo.png'} style={{'width':'50px', 'margin-top':'90px', 'margin-bottom':'70px', }} />
        <div style={{'margin-top':'20px', 'margin-bottom':'150px',}}>
          <Carousel interval={3500}>
            <Carousel.Item>
              <blockquote className={"twitter-tweet"}><p lang={"en"} dir={"ltr"}><i>There is no such thing as perfect decision.Every decision you make is perfected with time. &#35;Entrepreneur</i></p></blockquote>
            </Carousel.Item>
            <Carousel.Item>
              <blockquote className={"twitter-tweet"}><p lang={"en"} dir={"ltr"}><i>Have more then you show. Speak less then you know.</i></p></blockquote>
            </Carousel.Item>
          </Carousel>
          <p style={{'color':'#103166', 'margin-top':'30px', }}><strong>&mdash; Arslan Javed <a href={"https://twitter.com/Arslanjvd"} target={'_blank'}>&#40;&#64;Arslanjvd&#41;</a> &mdash;</strong></p>
        </div>
        <script async src={"//platform.twitter.com/widgets.js"} charset={"utf-8"}></script>
      </Grid>
    </section>
  </div>
)

export default IndexPage
