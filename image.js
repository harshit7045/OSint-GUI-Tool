
async function getUserData() {
  try {

    const { getJson } = require("serpapi");

    getJson({
      engine: "google_reverse_image",
      image_url: "https://i.imgur.com/5bGzZi7.jpg",
      api_key: "c135fa039a0d2f01447e4fea7398b8edd044dd280b2642abceb97fbae5115fd1"
    }, (json) => {
      console.log(json["inline_images"]);
      
    });




  } catch (error) {
    console.error(error);
  }
}
getUserData()