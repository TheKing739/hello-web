/* Import the Google Font 'Lato' */
@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);

/* Container styles */
body {
  background-color: #fff;
  color: #333;
  font-family: 'Lato';
}

.container {
  padding: 50px 0;
  text-align: center;
}

.chart {
  position: relative;
  display: inline-block;
  color: #999;
  font-size: 20px;
  text-align: center;
}

.chart figcaption {
  padding: 50px 25px;
  width: 100px;
  height: 50px;
  border: 20px solid #f0f0f0;
  border-radius: 100px;
  line-height: 50px;
}

.chart img {
  position: absolute;
  max-width: 100px;
  max-height: 100px;
  background: white;
}
/* END Container styles */

/* Colors for the circles and positions for the graphics */
.html {
  top: 50px;
  left: 45px;
}

.html + svg .outer {
  stroke: #e34f26;
}

.css {
  top: 55px;
  left: 48px;
}

.css + svg .outer {
  stroke: #0d84ce;
}

.javascript {
  max-width: 90px;
  max-height: 90px;
  top: 45px;
  left: 45px;
}

.javascript + svg .outer {
  stroke: #f0e040;
}

.node {
  width: 200px;
  height: 200px;
  top: 45px;
  left: 45px;
}

.node + svg .outer {
  stroke: #83cd29;
}

.chart svg {
  position: absolute;
  top: 0;
  left: 0;
}

.outer {
  fill: transparent;
  stroke: #333;
  stroke-width: 20;
  stroke-dasharray: 534;
  transition: stroke-dashoffset 1s;
  -webkit-animation-play-state: running;
  
  /* firefox bug fix - won't rotate at 90deg angles */
  -moz-transform: rotate(-89deg) translateX(-190px);
}

.chart:hover .outer {
  stroke-dashoffset: 534 !important;
  -webkit-animation-play-state: paused;
}
/* END Circle colors and graphic positions */


/* Set the initial values for the animation */
.chart[data-percent='100'] .outer {
  stroke-dashoffset: 0;
  -webkit-animation: show100 2s;
  animation: show100 2s;
}

.chart[data-percent='75'] .outer {
  stroke-dashoffset: 133; /* 기술 스펙 진행도 변경 코드 */
  -webkit-animation: show75 2s;
  animation: show75 2s;
}

.chart[data-percent='50'] .outer {
  stroke-dashoffset: 267;
  -webkit-animation: show50 2s;
  animation: show50 2s;
}

.chart[data-percent='25'] .outer {
  stroke-dashoffset: 401;
  -webkit-animation: show25 2s;
  animation: show25 2s;
}
/* END set initial animation values */

/* Keyframes for the initial animation */
@-webkit-keyframes show100 {
  from {
    stroke-dashoffset: 537;
  }
  
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes show100 {
  from {
    stroke-dashoffset: 537;
  }
  
  to {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes show75 {
  from {
    stroke-dashoffset: 537;
  }
  
  to {
    stroke-dashoffset: 134;
  }
}

@keyframes show75 {
  from {
    stroke-dashoffset: 537;
  }
  
  to {
    stroke-dashoffset: 124;
  }
}

@-webkit-keyframes show50 {
  from {
    stroke-dashoffset: 537;
  }
  
  to {
    stroke-dashoffset: 267;
  }
}

@keyframes show50 {
  from {
    stroke-dashoffset: 537;
  }
  
  to {
    stroke-dashoffset: 267;
  }
}

@-webkit-keyframes show25 {
  from {
    stroke-dashoffset: 537;
  }
  
  to {
    stroke-dashoffset: 401;
  }
}

@keyframes show25 {
  from {
    stroke-dashoffset: 537;
  }
  
  to {
    stroke-dashoffset: 401;
  }
}
/* END Keyframes for the initial animation */
