async function fetchData() {
    try {
      const response = await fetch('mongodb://localhost:27017');
      const data = await response.json();
      console.log('Data from MongoDB:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchData()