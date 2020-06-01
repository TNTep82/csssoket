const body = document.querySelector('body');
const modeswitch = document.querySelector('.nightmode');
const sidebar = document.querySelector('.sidebar');

if (modeswitch) {
  if (getCookie('cookieWindow') == 'false') {
  } else {
    let cookieWindow = document.createElement('div');
    cookieWindow.classList.add('cookiewindow');
    cookieWindow.classList.add('appear');
    document.body.appendChild(cookieWindow);
    cookieWindow.innerHTML =
      'We use cookies to save <br> your personalization eg for dark mode. <button id="agreebtn" onclick="windowClose()">Agree</button>';

    function windowClose() {
      cookieWindow.classList.add('disappear');
      document.cookie = 'cookieWindow=false';
    }
  }
  modeswitch.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    modeswitch.classList.toggle('d-active');
    document.cookie = 'darkmode=true';
    if (!modeswitch.classList.contains('d-active')) {
      document.cookie = 'darkmode=false';
    }
  });
}

if (sidebar) {
  let closer = document.createElement('div');
  closer.classList.add('closer');
  document.body.appendChild(closer);

  let burger = document.createElement('div');
  burger.classList.add('burger');
  document.body.appendChild(burger);

  let line1 = document.createElement('div');
  let line2 = document.createElement('div');
  let line3 = document.createElement('div');

  line1.classList.add('line1');
  line2.classList.add('line2');
  line3.classList.add('line3');

  burger.appendChild(line1);
  burger.appendChild(line2);
  burger.appendChild(line3);
}
const closer = document.querySelector('.closer');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  closer.classList.toggle('active');
});
closer.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  closer.classList.toggle('active');
});

if (getCookie('darkmode') == 'true' && getCookie('cookieWindow') == 'false') {
  body.classList.toggle('darkmode');
  modeswitch.classList.toggle('d-active');
}

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
