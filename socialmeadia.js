async function getUserData() {
	const id = document.getElementById('phoneNo').value;
	console.log("entered")
	 const url = `https://instagram-fast.p.rapidapi.com/profile/${id}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd7a15ede18msh7d59938708e20b5p121e44jsnd34277c22070',
			'X-RapidAPI-Host': 'instagram-fast.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		
		const result = await response.json();
		const a=response;
		console.log(result.data.user.full_name);
		document.getElementById('bio').innerHTML = result.data.user.biography;
		document.getElementById('name').innerHTML =result.data.user.full_name;
		document.getElementById('dpiaa').src =result.data.user.profile_pic_url_hd;
		console.log(result.data.user.profile_pic_url);
	} catch (error) {
		console.log("error");
	} 
	console.log("twitter output")
	const url1 = `https://twitter241.p.rapidapi.com/user?username=${id}`;
	const options1 = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '6502eac889msh466f24713abf4cap1d7458jsn3a68f25ccc3f',
			'X-RapidAPI-Host': 'twitter241.p.rapidapi.com'
		}
	};

	try {
		const res = await fetch(url1, options1);
		const r = await res.json();
		document.getElementById('crat').innerHTML = r.result.data.user.result.legacy.created_at;
		document.getElementById('prof').innerHTML =r.result.data.user.result.professional.professional_type;
		document.getElementById('nam').innerHTML =r.result.data.user.result.legacy.name;
		document.getElementById('dpitw').src =r.result.data.user.result.legacy.profile_image_url_https;

		console.log(r);
		

		
		
		console.log(r.result.data.user.result);
	} catch (error) {
		console.error(error);
	}



}





