document.getElementById('get-location').addEventListener('click', () => {
    fetch('https://ipinfo.io/json')
        .then(response => response.json())
        .then(data => {
            const location = data.loc.split(',');
            document.getElementById('latitude').textContent = location[0];
            document.getElementById('longitude').textContent = location[1];
            document.getElementById('country').textContent = data.country;
            document.getElementById('city').textContent = data.city;
            document.getElementById('ip').textContent = data.ip;
            document.getElementById('org').textContent = data.org;

            const map = document.getElementById('map');
            map.innerHTML = `<iframe
                width="100%"
                height="300"
                frameborder="0" style="border:0"
                src="https://www.google.com/maps?q=${location[0]},${location[1]}&output=embed" allowfullscreen>
            </iframe>`;
        })
        .catch(error => {
            console.error('Xatolik:', error);
            alert('Ma\'lumotlarni olishda xatolik yuz berdi!');
        });
});
