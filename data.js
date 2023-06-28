var posts = [
    {
        id: 1,
        title: 'Hollowknight',
        imageUrl: 'img/hollowknight.png',
        body: 'The protagonist of Hollow Knight, known as "The Knight", is a silent and enigmatic being. He explores the dark and dangerous world of Hallownest, armed with his Sword of Needles and special abilities. His unwavering determination propels him to face grotesque creatures and fearsome bosses, in the quest to unravel the ancient secrets and restore the lost glory of his kingdom.'
    },
    {
        id: 2,
        title: 'Hornet',
        imageUrl: 'img/hornet.png',
        body: 'Hornet, a striking character in Hollow Knight, is an agile and determined figure. She is a skilled warrior, armed with her needle and a fierce attitude. Hornet is an independent and fearless force that crosses the path of the protagonist, challenging him in intense battles.'
    },
    {
        id: 3,
        title: 'Radiance',
        imageUrl: 'img/radiance.png',
        body: 'Radiance, the antagonist in Hollow Knight, is a transcendent and imposing entity. It is the manifestation of the Radiant Light and represents a divine and threatening presence. Radiance is shrouded in mystery and is considered the source of the corruption that plagues Hallownest. The confrontation with her is an epic and challenging battle, requiring skill and strategy from the player. Her power-imbued presence and stunning design make her a memorable and impactful figure in the game narrative. To face Radiance is to face the very essence of darkness and light, creating a thrilling and rewarding climax to the protagonist journey.'
    },
];
// Criação da Função para retornar os elementos dos objetos na seção POSTS//
var postContainer = document.querySelector('.posts-container');
posts.forEach(function (post) {
    var postHTML = "\n    <section id=\"post-".concat(post.id, "\" class=\"post\">\n      <a href=\"").concat(post.title.toLowerCase(), ".html\">\n        <img id=\"post-image-").concat(post.id, "\" src=\"").concat(post.imageUrl, "\" alt=\"Post Image\">\n        <h2 id=\"post-title-").concat(post.id, "\">").concat(post.title, "</h2>\n        <p id=\"post-body-").concat(post.id, "\">").concat(post.body, "</p>\n        <div class=\"expand\">Expand...</div>\n      </a>\n    </section>\n  ");
    postContainer.insertAdjacentHTML('beforeend', postHTML);
});
