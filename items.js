

const posts = []

const images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.png',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'img/11.jpg',
    'img/12.jpg',
    'img/13.jpg',
    'img/14.jpg',
    'img/15.jpg',
    'img/16.jpg',
    'img/17.jpg',
    'img/18.jpg',
    'img/bonghy.png',
    'img/charlie banana no bg.png',
    'img/tipa.png',
    'img/tipa 1.png',
    'img/tipa 2.png',
    'img/tipa 3.png',
    'img/tipa 4.png'
]

let imageIndex = 0;

for(let i = 1; i <= 20; i++){
    let item = {
        id: i,
        title: ``,
        date: `${i < 11 ? 0 : ''}${i}/10/2021 `,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}

console.log(posts)
