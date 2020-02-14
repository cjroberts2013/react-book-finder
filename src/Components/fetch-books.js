const extractInfo = (res) => {
    const { items } = res;
    if (!items) return [];
    const dummyImg = './../images/dummyImg.jpg'

    return items.map((book) => {
        const info = book.volumeInfo;

        const {
            title,
            publisher,
            pageCount,
            averageRating,
        } = info;
        const link = info.previewLink;
        const imgLink = info.imageLinks ? info.imageLinks.thumbnail : dummyImg;
        const author = info.authors;
        const published = info.publishedDate;
        const desc = info.subtitle;
        const category = info.categories[];

        return {
            title,
            link,
            imgLink,
            author,
            publisher,
            published,
            desc,
            pageCount,
            averageRating,
            category
        }
    })
}


export function fetchBooks(query) {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + query;
    return fetch(url)
        .then((res) => res.json())
        .then(extractInfo)
        .catch(console.log)
}