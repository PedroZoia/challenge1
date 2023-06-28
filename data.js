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
        body: 'Radiance, the antagonist in Hollow Knight, is a transcendent and imposing entity. It is the manifestation of the Radiant Light and represents a divine and threatening presence. Radiance is shrouded in mystery and is considered the source of the corruption that plagues Hallownest. The confrontation with her is an epic and challenging battle, requiring skill and strategy from the player. Her power-imbued presence and stunning design make her a memorable and impactful figure in the game narrative.'
    },
];
document.addEventListener('DOMContentLoaded', function (event) {
    var _a;
    // Return elements to index function //
    var postContainer = document.querySelector('.posts-container');
    if (postContainer) {
        posts.forEach(function (post) {
            var postHTML = "\n          <section id=\"post-".concat(post.id, "\" class=\"post\">\n            <a href=\"").concat(post.title.toLowerCase(), ".html\">\n              <img id=\"post-image-").concat(post.id, "\" src=\"").concat(post.imageUrl, "\" alt=\"Post Image\">\n              <h2 id=\"post-title-").concat(post.id, "\">").concat(post.title, "</h2>\n              <p id=\"post-body-").concat(post.id, "\">").concat(post.body, "</p>\n              <div class=\"expand\">Expand...</div>\n            </a>\n          </section>\n        ");
            postContainer.insertAdjacentHTML('beforeend', postHTML);
        });
    }
    // Check the current page and display content of each one //
    var pathname = window.location.pathname;
    var pageName = (_a = pathname.split('/').pop()) === null || _a === void 0 ? void 0 : _a.split('.')[0].toLowerCase();
    var selectedPost = null;
    for (var i = 0; i < posts.length; i++) {
        if (posts[i].title.toLowerCase() === pageName) {
            selectedPost = posts[i];
            break;
        }
    }
    if (selectedPost) {
        var pageContainer = document.querySelector('.content-box');
        if (pageContainer) {
            var postHTML = "\n      <img class=\"content-box-image\" src=\"".concat(selectedPost.imageUrl, "\" alt=\"Post Image\">\n      <div class=\"content-box-title\">").concat(selectedPost.title, "</div>\n      <p class=\"content-box-description\">").concat(selectedPost.body, "</p>\n    ");
            pageContainer.insertAdjacentHTML('beforeend', postHTML);
        }
    }
    var comments = [
        // Users from hollowknight page //
        {
            id: 1,
            postId: 1,
            email: 'usuario_1@email.com',
            body: 'I really enjoyed playing with this character, despite being small, they are agile and have a pleasant appearance.'
        },
        {
            id: 2,
            postId: 1,
            email: 'usuario_2@email.com',
            body: 'I genuinely had a great time playing as this character; even though they are small in size, their agility and pleasing visual design make them enjoyable to control.'
        },
        {
            id: 3,
            postId: 1,
            email: 'usuario_3@email.com',
            body: 'I had a blast playing with this character. Despite their small stature, they possess impressive agility and boast a visually appealing design.'
        },
        // Users from hornet page //
        {
            id: 4,
            postId: 1,
            email: 'usuario_4@email.com',
            body: 'Playing as Hornet in Hollow Knight is a true delight. Her fluid animations, coupled with her sharp needle and acrobatic abilities, create a unique and satisfying gameplay dynamic.'
        },
        {
            id: 5,
            postId: 2,
            email: 'usuario_5@email.com',
            body: 'I was instantly drawn to the Hornet character in Hollow Knight. From her striking design to her agile moveset, she brings a sense of excitement and intensity to the game.'
        },
        {
            id: 6,
            postId: 2,
            email: 'usuario_6@email.com',
            body: 'The Hornet character in Hollow Knight is absolutely captivating. Her swift movements and graceful combat style make playing as her an exhilarating experience.'
        },
        // Users from radiance page //
        {
            id: 7,
            postId: 1,
            email: 'usuario_7@email.com',
            body: 'The Radiance in Hollow Knight is a captivating and formidable antagonist, adding an eerie atmosphere to the game with its ethereal presence and mysterious aura.'
        },
        {
            id: 8,
            postId: 2,
            email: 'usuario_8@email.com',
            body: 'The Radiance stands out as a menacing and otherworldly force in Hollow Knight, challenging players with its radiant glow and formidable powers.'
        },
        {
            id: 9,
            postId: 2,
            email: 'usuario_9@email.com',
            body: 'The brilliantly crafted Radiance in Hollow Knight symbolizes light and infection, adding depth to the game narrative, while its challenging boss fight showcases its overwhelming power and relentless pursuit of darkness.'
        }
    ];
    // This is assuming you have the selectedPost variable from the previous step
    if (selectedPost !== null) {
        var selectedPostId_1 = selectedPost.id;
        // Get the comments section
        var commentsContainer_1 = document.querySelector('.comments');
        // Check each comment
        comments.forEach(function (comment) {
            if (comment.postId === selectedPostId_1) {
                // If this comment belongs to the current post, create HTML for it
                var commentHTML = "\n        <section class=\"comment\">\n          <span class=\"user-email\">".concat(comment.email, ":</span>\n          <span class=\"user-comment\">").concat(comment.body, "</span>\n          <hr class=\"divider\">\n        </section>\n      ");
                // Append the comment HTML to the comments section
                commentsContainer_1.insertAdjacentHTML('beforeend', commentHTML);
            }
        });
    }
});
