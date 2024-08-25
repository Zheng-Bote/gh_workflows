window.onload = start;

function start() {
  const url = window.location;
  const lastField = url.pathname.split("/").pop();
  let urlstring = url.pathname.replace(lastField, "");
  const arr = urlstring.split("/");
  const bread = document.getElementById("bread");
  bread.innerHTML = `<li><a href="${url.origin}">Main</a></li>`;
  let urlnew = url.origin;

  for (let i = 1; i < arr.length - 1; i++) {
    if (i === arr.length - 2) {
      bread.innerHTML += `<li>${arr[i]}</li>`;
    } else {
      bread.innerHTML += `<li><a href="${urlnew}/${arr[i]}">${arr[i]}</a>`;
    }
  }
}
