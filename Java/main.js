function validateform() {
  let name = document.myform.name.value;
  let password = document.myform.password.value;

  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
  }
}

function saveTostorage(key, value) {
  let data = value;
  window.localStorage.setItem(key, data);

}
