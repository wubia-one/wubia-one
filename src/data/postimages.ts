// Import-Anweisungen für benötigte Module
import axios from 'axios';

type Postimage = {
  path: string;
};

const postimages: Postimage[] = [];

// Funktion zum Abrufen der Bild-URLs mit Suchtags
async function getImgUrls(tags: string, totalPages: number): Promise<string[]> {
  try {
    // Array zum Speichern aller Bild-URLs über mehrere Seiten
    const allImgUrls: string[] = [];

    // Schleife durch mehrere Seiten
    for (let page = 1; page <= totalPages; page++) {
      const response = await axios.get(`https://danbooru.donmai.us/posts.json?tags=${tags}&page=${page}`);
      const posts = response.data;

      // Array zum Speichern von Bild-URLs auf der aktuellen Seite
      const imgUrls: string[] = [];
      
      // Extrahiere Bild-URLs aus der JSON-Antwort
      posts.forEach((post: any) => {
        const imgUrl = post.large_file_url;
        if (imgUrl) {
          imgUrls.push(imgUrl);

          // Erstelle ein Postimage-Objekt und füge es zum postimages-Array hinzu
          postimages.push({ path: imgUrl });
        }
      });

      // Füge imgUrls zu allImgUrls hinzu
      allImgUrls.push(...imgUrls);
    }

    return allImgUrls;
  } catch (error) {
    console.error('Fehler:', error.message);
    return [];
  }
}

// Exportiere die Funktionen und Daten, die du verwenden möchtest
export { postimages, getImgUrls };
