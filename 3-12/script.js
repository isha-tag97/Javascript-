document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const formData = new FormData(e.target);
    let dataString = "";

    formData.forEach((value, key) => {
        dataString += `<strong>${key}:</strong> ${value}<br>`;
    });

    console.log(dataString);
    

    document.getElementById('displayData').innerHTML = dataString;
});