function loadGAScript(measurementId) {
  if (document.getElementById('ga-script')) return;

  const script1 = document.createElement('script');
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script1.async = true;
  script1.id = 'ga-script';
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.id = 'ga-inline-script';
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);
}

const cookieButton = document.getElementById('accept-cookies');
const cookieBanner = document.getElementById('cookie-banner');
const measurementId = 'G-LN6C7XPJKD'; // Replace if needed

if (cookieButton && cookieBanner) {
  cookieButton.onclick = function () {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
    loadGAScript(measurementId);
  };

  if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookieBanner.style.display = 'none';
    loadGAScript(measurementId);
  }
}
