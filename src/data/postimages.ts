import axios from 'axios';

type Postimage = {
  path: string;
};

const postimages: Postimage[] = [];

async function getImgUrls(tags: string, totalPages: number): Promise<string[]> {
  try {
    // Array to store all image URLs across pages
    const allImgUrls: string[] = [];

    // Loop through multiple pages
    for (let page = 1; page <= totalPages; page++) {
      const response = await axios.get(`https://danbooru.donmai.us/posts.json?tags=${tags}&page=${page}`);
      const posts = response.data;

      // Array to store image URLs on the current page
      const imgUrls: string[] = [];
      
      // Extract image URLs from the JSON response
      posts.forEach((post: any) => {
        const imgUrl = post.large_file_url;
        if (imgUrl) {
          imgUrls.push(imgUrl);

          // Create a Postimage object and push it to the postimages array
          postimages.push({ path: imgUrl });
        }
      });

      // Concatenate imgUrls to allImgUrls
      allImgUrls.push(...imgUrls);
    }

    return allImgUrls;
  } catch (error) {
    console.error('Error:', error.message);
    return [];
  }
}

let specifiedTags = 'blue_archive+swimsuit';
const totalPages = 1000000000000000000; // Replace with the number of pages you want to scrape

getImgUrls(specifiedTags, totalPages)
  .then((imgUrls) => {
    console.log('Image URLs:', imgUrls);
    console.log('Postimages array:', postimages);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

export default postimages;
