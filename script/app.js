//analog clock

let hr = document.querySelector('#hr'),
  mn = document.querySelector('#mn'),
  sc = document.querySelector('#sc');

setInterval(() => {
  let day = new Date(),
    hh = day.getHours() * 30,
    mm = day.getMinutes() * 6,
    ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`

  //digital clock
  let hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    ampm = document.getElementById('ampm');

  let h = new Date().getHours(),
    m = new Date().getMinutes(),
    s = new Date().getSeconds();

  let am = h >= 12 ? "PM" : "AM";

  //конверт 24ч. в 12ч.
  if (h > 12) {
    h = h - 12;
  }

  // добаление нуля если цифра менее десяти
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m
  s = (s < 10) ? "0" + s : s
  // console.log(s);

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
}, 520)