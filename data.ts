// Criação da lista de objetos para retornar no HTML //
type Post = {
    id: number;
    title: string;
    imageUrl: string;
    body: string;
  };

  const posts: Post[] = [
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

// Criação da Função para retornar os elementos dos objetos na seção POSTS//
const postContainer = document.querySelector('.posts-container')!;

posts.forEach((post) => {
  const postHTML = `
    <section id="post-${post.id}" class="post">
      <a href="${post.title.toLowerCase()}.html">
        <img id="post-image-${post.id}" src="${post.imageUrl}" alt="Post Image">
        <h2 id="post-title-${post.id}">${post.title}</h2>
        <p id="post-body-${post.id}">${post.body}</p>
        <div class="expand">Expand...</div>
      </a>
    </section>
  `;

  postContainer.insertAdjacentHTML('beforeend', postHTML);
});