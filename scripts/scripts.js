const API_KEY = "AIzaSyBfk7Yg7TiiNNlg9ZaDWiv80XZxWmBVcyc";

function toggleNav() {
  const element = document.getElementById("mobile-nav");
  if (element) {
    if (element.className.split(" ").includes("visible"))
      element.classList.remove("visible");
    else element.classList.add("visible");
  }
}

function toggleMenu(event) {
  const { target } = event;
  if (target) {
    if (target.className.split(" ").includes("navbar-link")) {
      if (target.className.split(" ").includes("visible"))
        target.classList.remove("visible");
      else target.classList.add("visible");
    }
  }
}

const Ejercicio = () => {
  const enlaces = document.getElementsByTagName("a");
  const parrafos = document.getElementsByTagName("p");
  console.log(parrafos[0].tagName);
  const numero = enlaces.length;
  let expanded = false;
  console.log(`Numero de enlaces ${numero}`);
  console.log(
    `Direciòn del ultimo enlace ${
      enlaces[numero - 1].href.length > 0
        ? enlaces[numero - 1].href.length
        : "esta vacio"
    }`
  );
  console.log(
    `numero de enlaces que enlazan a contactenos ${
      [].filter.call(enlaces, (el) => el.href == "/contactenos").length
    }`
  );
  console.log(
    ` Numero de enlaces del tercer parrafo ${
      parrafos.length > 2
        ? [].filter.call(parrafos[2], (el) => el.tagName == "A").length
        : "No hay tercer parrafo"
    }`
  );
  const mas = document.getElementById("aprendermas");
  const masText = document.getElementById("mash3");
  const initialContent = masText.innerHTML;
  console.log(mas);
  console.log(masText);
  mas.onclick = () => {
    expanded = !expanded;
    if (expanded) {
      masText.innerHTML +=
        " oushdgfunhdbflghjfdgkdfhkbd bfghfdj hgvdjgdf kgfdgejfgd";
    } else {
      masText.innerHTML = initialContent;
    }
  };
};


function get_current_position() {
  document.getElementById("map").innerHTML = "<p>Locating...</p>";
  console.log(document.getElementById("map"));
  const geo_options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      geo_success,
      geo_error,
      geo_options
    );
  } else {
    geo_is_not_avaliable();
  }
}

function geo_success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const map = document.getElementById("map");
  console.log(map);
  map.src = `https://www.google.com/maps/embed/v1/directions?key=${API_KEY}&origin=${latitude},${longitude}&destination=12.105112558150257,-86.24870358749968`;
}

function geo_error(error) {
  document.getElementById("out").innerHTML =
    "<p>ERROR(" + error.code + "):" + error.message + "</p>";
}

function geo_is_not_avaliable() {
  const my_status = geoplugin_status();
  const my_latitude = geoplugin_latitude();
  const my_longitude = geoplugin_longitude();
  const my_city = geoplugin_city();
  const my_region = geoplugin_region();
  const my_countryName = geoplugin_countryName();

  if (my_status == 404) {
    const error = {
      code: 404,
      message: "Error 404 - No hay datos encontrados en la IP",
    };
    geo_error(error);
    return;
  }

  const position = {
    coords: { latitude: my_latitude, longitude: my_longitude },
    address: { city: my_city, region: my_region, country: my_countryName },
  };

  geo_success(position);
}

const email = document.getElementById("email");
const name = document.getElementById("name");
const message = document.getElementById("message");
const form = document.getElementById("contact-form");

window.onload = () => {
  //console.log("AYUDA");
  //if (form) {
  //  form.addEventListener("submit", (e) => {
  //    e.preventDefault();
  //    console.log(`correo: ${email.value}`);
  //    console.log(`nombre: ${name.value}`);
  //    console.log(`message: ${message.value}`);
  //  });
  //}

  get_current_position();
};

