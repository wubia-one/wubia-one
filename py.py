import requests
from bs4 import BeautifulSoup

def get_image_urls(base_url, tags):
    page_number = 1
    image_urls = []

    while True:
        url = f"{base_url}&page={page_number}"
        response = requests.get(url)

        if response.status_code != 200:
            print(f"Failed to retrieve page {page_number}. Exiting.")
            break

        soup = BeautifulSoup(response.content, 'html.parser')
        images = soup.find_all('img', class_='thumbnail-preview__image')

        if not images:
            print("No more images found. Exiting.")
            break

        for img in images:
            image_url = img['src']
            image_urls.append(image_url)

        page_number += 1

    return image_urls

if __name__ == "__main__":
    base_url = "https://danbooru.donmai.us/posts?tags=ganyu+swimsuit"
    image_urls = get_image_urls(base_url, "ganyu swimsuit")

    print("Image URLs:")
    for i, url in enumerate(image_urls, start=1):
        print(f"{i}. {url}")
