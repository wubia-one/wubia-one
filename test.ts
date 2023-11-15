import axios from 'axios';

async function getSampleUrls() {
  const apiUrl = 'https://yande.re/post.json?tags=ganyu';

  try {
    const response = await axios.get(apiUrl);import axios from 'axios';

    async function getSampleUrls() {
      const apiUrl = 'https://yande.re/post.json?tags=ganyu';
    
      try {
        const response = await axios.get(apiUrl);
        const posts = response.data;
    
        // Assuming the JSON structure has an array of posts with a 'sample_url' property
        const sampleUrls = posts.map((post: any) => post.sample_url);
    
        console.log(sampleUrls);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    // Call the function to get sample URLs
    getSampleUrls();
    
    const posts = response.data;

    // Assuming the JSON structure has an array of posts with a 'sample_url' property
    const sampleUrls = posts.map((post: any) => post.sample_url);

    console.log(sampleUrls);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function to get sample URLs
getSampleUrls();
