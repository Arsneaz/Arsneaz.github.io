// Getting the data from form
document
  .getElementById("table-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const nim = document.getElementById("nim").value;
    const prodi = document.getElementById("prodi").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const alamat = document.getElementById("alamat").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    var formData = [
      name,
      nim,
      prodi,
      email,
      password,
      gender,
      tanggalLahir,
      alamat
    ];

    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = "./table.html";
  });