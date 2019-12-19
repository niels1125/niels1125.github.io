let lat;
let long;
let iss;
let marker;

let newArr = [];
let array1 = [];

const makeMarkers = function() {
  let num = 0;

  for (optie of array1) {
    num += 1;
    if (num === 50) {
      break;
    }
    marker = WE.marker(
      [optie.lat, optie.long],
      'img/explosion.svg',
      16,
      16
    ).addTo(earth);
    $('.we-pm-icon').css('pointer-events', 'none');
  }
};

const grafiekHorizontal = function(
  asia,
  africa,
  europe,
  northamerica,
  southamerica,
  antartica,
  oceania
) {
  let ctx = document.getElementById('myChart').getContext('2d');
  Chart.defaults.global.defaultFontColor = '#fff';
  //gradients-------------------------------------------------\\
  const gradientAsia = ctx.createLinearGradient(0, 0, 100, 100);
  gradientAsia.addColorStop(0, 'rgba(128, 182, 244, 0.6)');
  gradientAsia.addColorStop(1, 'rgba(244, 144, 128, 0.6)');
  const gradientAfrica = ctx.createLinearGradient(0, 0, 100, 100);
  gradientAfrica.addColorStop(0, 'rgba(10,0,170,0.6)');
  gradientAfrica.addColorStop(1, 'rgba(0,212,255,0.6)');
  const gradientEurope = ctx.createLinearGradient(0, 0, 100, 100);
  gradientEurope.addColorStop(0, 'rgba(162,170,0,0.6)');
  gradientEurope.addColorStop(1, 'rgba(0,255,130,0.6)');
  const gradientNa = ctx.createLinearGradient(0, 0, 100, 100);
  gradientNa.addColorStop(0, 'rgba(170,0,0,0.6)');
  gradientNa.addColorStop(1, 'rgba(237,131,180,0.6)');
  const gradientSa = ctx.createLinearGradient(0, 0, 100, 100);
  gradientSa.addColorStop(0, 'rgba(115,0,170,0.6)');
  gradientSa.addColorStop(1, 'rgba(131,237,198,0.6)');
  const gradientOceania = ctx.createLinearGradient(0, 0, 100, 100);
  gradientOceania.addColorStop(0, 'rgba(221,255,0,0.6)');
  gradientOceania.addColorStop(1, 'rgba(237,183,131,0.6)');
  //-----------------------------------------------------------\\
  let myChart = new Chart(ctx, {
    responsive: true,
    mainainAspectRatio: false,
    type: 'horizontalBar',
    data: {
      labels: [
        'Asia',
        'Africa',
        'Europe',
        'N. America',
        'S. America',
        'Oceania'
      ],
      datasets: [
        {
          label: '# of Votes',
          data: [asia, africa, europe, northamerica, southamerica, oceania],
          backgroundColor: [
            gradientAsia,
            gradientAfrica,
            gradientEurope,
            gradientNa,
            gradientSa,
            gradientOceania
          ],
          borderWidth: 0
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Meteor impacts',
        fontSize: 16,
        fontColor: '#dc143c'
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              stepSize: 50
            },
            gridLines: {
              display: false
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    }
  });
};

const grafiekVertical = function(
  asia,
  africa,
  europe,
  northamerica,
  southamerica,
  antartica,
  oceania
) {
  let ctx = document.getElementById('myChart').getContext('2d');
  Chart.defaults.global.defaultFontColor = '#fff';
  //gradients-------------------------------------------------\\
  const gradientAsia = ctx.createLinearGradient(0, 0, 100, 100);
  gradientAsia.addColorStop(0, 'rgba(128, 182, 244, 0.6)');
  gradientAsia.addColorStop(1, 'rgba(244, 144, 128, 0.6)');
  const gradientAfrica = ctx.createLinearGradient(0, 0, 100, 100);
  gradientAfrica.addColorStop(0, 'rgba(10,0,170,0.6)');
  gradientAfrica.addColorStop(1, 'rgba(0,212,255,0.6)');
  const gradientEurope = ctx.createLinearGradient(0, 0, 100, 100);
  gradientEurope.addColorStop(0, 'rgba(162,170,0,0.6)');
  gradientEurope.addColorStop(1, 'rgba(0,255,130,0.6)');
  const gradientNa = ctx.createLinearGradient(0, 0, 100, 100);
  gradientNa.addColorStop(0, 'rgba(170,0,0,0.6)');
  gradientNa.addColorStop(1, 'rgba(237,131,180,0.6)');
  const gradientSa = ctx.createLinearGradient(0, 0, 100, 100);
  gradientSa.addColorStop(0, 'rgba(115,0,170,0.6)');
  gradientSa.addColorStop(1, 'rgba(131,237,198,0.6)');
  const gradientOceania = ctx.createLinearGradient(0, 0, 100, 100);
  gradientOceania.addColorStop(0, 'rgba(221,255,0,0.6)');
  gradientOceania.addColorStop(1, 'rgba(237,183,131,0.6)');
  //-----------------------------------------------------------\\
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Asia',
        'Africa',
        'Europe',
        'N. America',
        'S. America',
        'Oceania'
      ],
      datasets: [
        {
          label: '# of Votes',
          data: [asia, africa, europe, northamerica, southamerica, oceania],
          backgroundColor: [
            gradientAsia,
            gradientAfrica,
            gradientEurope,
            gradientNa,
            gradientSa,
            gradientOceania
          ],
          borderWidth: 0
        }
      ]
    },
    options: {
      title: {
        display: true,
        position: 'top',
        fontSize: 20,
        text: 'Meteor impacts',
        fontColor: '#dc143c'
      },
      mainainAspectRatio: false,
      legend: {
        display: false
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              stepSize: 50,
              fontSize: 24
            },
            gridLines: {
              display: false
            }
          }
        ],
        xAxes: [
          {
            ticks: {
              fontSize: 20
            },
            gridLines: {
              display: false
            }
          }
        ]
      }
    }
  });
};

const showMeteors = function(data) {
  let num = 0;
  let meteor;
  let lat1;
  let long1;
  let meteorName;

  for (meteor of data) {
    num += 1;
    if (num === 1000) {
      break;
    }
    lat1 = parseFloat(meteor.reclat);
    long1 = parseFloat(meteor.reclong);
    meteorName = meteor.name;

    if (lat1 != NaN) {
      array1.push({ name: meteorName, lat: lat1, long: long1 });
    }
  }

  makeMarkers();
};

const showGlobe = function() {
  let zoomVar = 1.5;

  if (document.getElementById('c-container').offsetWidth >= 768) {
    zoomVar = 2.5;
  }

  let optionsMap = {
    zooming: true,
    atmosphere: false,
    zoom: zoomVar,
    dragging: true
  };

  earth = new WE.map('earth', optionsMap);

  let globe = WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
  globe.addTo(earth);
  iss = WE.marker([lat, long], 'img/spacestation.png', 60, 60).addTo(earth);
};

const desktopButton = function(event) {
  earth.setView([lat, long]);
};

const mobileButtonStart = function(event) {
  if (document.getElementById('c-container').offsetWidth < 768) {
    $('#buttonISS').css({
      'box-shadow': '0px 0px 0px 0px #8B0000',
      'margin-top': '37px',
      'margin-bottom': '5px'
    });
    earth.setView([lat, long]);
  }
  if (document.getElementById('c-container').offsetWidth >= 768) {
    $('#buttonISS').css({
      'box-shadow': '0px 0px 0px 0px #8B0000',
      'margin-top': '53px',
      'margin-bottom': '10px'
    });
    earth.setView([lat, long]);
  }
};

const mobileButtonEnd = function(event) {
  if (document.getElementById('c-container').offsetWidth < 768) {
    $('#buttonISS').css({
      'box-shadow': '0px 5px 0px 0px #8B0000',
      'margin-top': '32px'
    });
  }
  if (document.getElementById('c-container').offsetWidth >= 768) {
    $('#buttonISS').css({
      'box-shadow': '0px 5px 0px 0px #8B0000',
      'margin-top': '48px'
    });
    earth.setView([lat, long]);
  }
};

let asia = 0;
let europe = 0;
let africa = 0;
let northamerica = 0;
let southamerica = 0;
let oceania = 0;
let antartica = 0;

const getContinent = function() {
  let metCountryArr = [];
  let countrArrAsia = [];
  let countrArrEurope = [];
  let countrArrAntartica = [];
  let countrArrAfrica = [];
  let countrArrNorthAmerica = [];
  let countrArrSouthAmerica = [];
  let countrArrOceania = [];

  $.getJSON('json/countries.json', function(data) {
    for (optie of data) {
      switch (optie.Continent_Name) {
        case 'Asia':
          countrArrAsia.push(optie.Two_Letter_Country_Code.toLowerCase());
          break;
        case 'Europe':
          countrArrEurope.push(optie.Two_Letter_Country_Code.toLowerCase());
          break;
        case 'Antartica':
          countrArrAntartica.push(optie.Two_Letter_Country_Code.toLowerCase());
          break;
        case 'Africa':
          countrArrAfrica.push(optie.Two_Letter_Country_Code.toLowerCase());
          break;
        case 'North America':
          countrArrNorthAmerica.push(
            optie.Two_Letter_Country_Code.toLowerCase()
          );
          break;
        case 'South America':
          countrArrSouthAmerica.push(
            optie.Two_Letter_Country_Code.toLowerCase()
          );
          break;
        case 'Oceania':
          countrArrOceania.push(optie.Two_Letter_Country_Code.toLowerCase());
          break;
      }
    }
  });

  $.getJSON('json/meteor_country.json', function(data) {
    for (optie of data) {
      let found = countrArrAsia.find(function(element) {
        if (optie.country === element) {
          asia += 1;
        }
      });

      let found1 = countrArrEurope.find(function(element) {
        if (optie.country === element) {
          europe += 1;
        }
      });

      let found2 = countrArrAfrica.find(function(element) {
        if (optie.country === element) {
          africa += 1;
        }
      });

      let found3 = countrArrAntartica.find(function(element) {
        if (optie.country === element) {
          antartica += 1;
        }
      });

      let found4 = countrArrNorthAmerica.find(function(element) {
        if (optie.country === element) {
          northamerica += 1;
        }
      });

      let found5 = countrArrSouthAmerica.find(function(element) {
        if (optie.country === element) {
          southamerica += 1;
        }
      });

      let found6 = countrArrOceania.find(function(element) {
        if (optie.country === element) {
          oceania += 1;
        }
      });
    }
    if (document.getElementById('c-container').offsetWidth < 768) {
      grafiekHorizontal(
        asia,
        africa,
        europe,
        northamerica,
        southamerica,
        antartica,
        oceania
      );
    } else {
      grafiekVertical(
        asia,
        africa,
        europe,
        northamerica,
        southamerica,
        antartica,
        oceania
      );
    }
  });
};

const moveISS = function() {
  $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(
    data
  ) {
    lat = parseFloat(data.iss_position.latitude);
    long = parseFloat(data.iss_position.longitude);

    iss.setLatLng([lat, long]);
  });

  setTimeout(moveISS, 5000);
};

const getMeteorData = function() {
  laadData('https://data.nasa.gov/resource/y77d-th95.json', showMeteors);
};

const handleResizeWindow = function() {
  if (document.getElementById('c-container').offsetWidth < 768) {
    document.querySelector('.js-mockup-large').style.display = 'none';
    document.querySelector('.js-mockup-small').style.display = 'block';
    grafiekHorizontal(
      asia,
      africa,
      europe,
      northamerica,
      southamerica,
      antartica,
      oceania
    );
  } else {
    document.querySelector('.js-mockup-large').style.display = 'block';
    document.querySelector('.js-mockup-small').style.display = 'none';
    grafiekVertical(
      asia,
      africa,
      europe,
      northamerica,
      southamerica,
      antartica,
      oceania
    );
  }
};

const timerRefreshPage = () => {
  function fn60sec() {
    moveISS();
  }
  fn60sec();
  setInterval(fn60sec, 2 * 1000);
};

const init = function() {
  window.addEventListener('resize', handleResizeWindow);
  getMeteorData();
  showGlobe();
  getContinent();
  moveISS();
  $('.we-pm-icon').css('pointer-events', 'none');
  $('span').removeClass('cesium-credit-textContainer');
};

document.addEventListener('DOMContentLoaded', function() {
  console.info('DOM geladen');

  init();
});
