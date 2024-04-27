
async function getUserData() {
	const phone = document.getElementById('phoneNo').value;
	const url = `https://mailcheck.p.rapidapi.com/?domain=${phone}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'da9f7eefe4mshb03d7d2e86b88dbp1c2559jsn78e61fdfd2ba',
			'X-RapidAPI-Host': 'mailcheck.p.rapidapi.com'
		}
	};
	
	try {
		
		const response = await fetch(url, options);
		const data = await response.json();
		console.log(data);
		document.getElementById('valid-info').innerText = data.valid;
        document.getElementById('country-info').innerText = data.disposable;
        document.getElementById('location-info').innerText = data.email_forwarder;
        document.getElementById('carrier-info').innerText = data.domain;
        document.getElementById('line-type-info').innerText = data.last_changed_at;

	} catch (error) {
		console.error(error);
	}
}
