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
        } = info
    })
}