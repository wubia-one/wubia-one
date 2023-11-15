import axios from 'axios';
import * as cheerio from 'cheerio';


type Postimage = {
  path: string;
};


const postimages: Postimage[] = [];

async function getImgUrls(tags: string, totalPages: number): Promise<string[]> {
  try {
    const baseUrl = 'https://danbooru.donmai.us/posts';

    // Array to store all image URLs across pages
    const allImgUrls: string[] = [];

    // Loop through multiple pages
    for (let page = 1; page <= totalPages; page++) {
      const response = await axios.get(`${baseUrl}?tags=${tags}&page=${page}`);
      const $ = cheerio.load(response.data);

      // Array to store image URLs on the current page
      const imgUrls: string[] = [];
      $('img').each((index, element) => {
        const imgUrl = $(element).attr('src');
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
    console.error('Error:');
    return [];
  }
}

const specifiedTags = 'ganyu+swimsuit';
const totalPages = 1000; // Replace with the number of pages you want to scrape

getImgUrls(specifiedTags, totalPages)
  .then((imgUrls) => {
    console.log('Image URLs:', imgUrls);
    console.log('Postimages array:', postimages);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });


  
  export default postimages;
  