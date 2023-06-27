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
      title: 'Hollow Knight',
      imageUrl: 'img/hollowknight.png',
      body: 'O protagonista de Hollow Knight, conhecido como "O Cavaleiro", é um ser silencioso e enigmático. Ele explora o mundo sombrio e perigoso de Hallownest, armado com sua Espada das Agulhas e habilidades especiais. Sua determinação inabalável o impulsiona a enfrentar criaturas grotescas e chefes temíveis, na busca por desvendar os segredos antigos e restaurar a glória perdida de seu reino. Mesmo sem diálogos, o Cavaleiro transmite uma profundidade emocional única através de gestos e ações, cativando os jogadores com sua jornada solitária e sua dedicação incansável. Ele se torna um herói sombrio e inesquecível em um mundo repleto de mistérios e perigos.'
    },
    {
      id: 2,
      title: 'Hornet',
      imageUrl: 'img/hornet.png',
      body: 'Hornet, uma personagem marcante em Hollow Knight, é uma figura ágil e determinada. Ela é uma guerreira habilidosa, armada com sua agulha e uma atitude feroz. Hornet é uma força independente e destemida que cruza o caminho do protagonista, desafiando-o em batalhas intensas. Embora inicialmente hostil, ela revela uma complexidade surpreendente à medida que a história se desenrola. Com seu carisma e presença poderosa, Hornet se torna uma aliada inesperada e uma personagem cativante, adicionando profundidade e emoção à jornada dos jogadores pelo mundo de Hallownest.'
    },
    {
      id: 3,
      title: 'Radiance',
      imageUrl: 'img/radiance.png',
      body: 'Radiance, o personagem central em Hollow Knight, é uma entidade transcendente e imponente. Ela é a manifestação da Luz Radiante e representa uma presença divina e ameaçadora. Radiance é envolta em mistério e é considerada a fonte da corrupção que assola Hallownest. O confronto com ela é uma batalha épica e desafiadora, exigindo habilidade e estratégia do jogador. Sua presença imbuída de poder e seu design impressionante a tornam uma figura memorável e impactante na narrativa do jogo. Enfrentar a Radiance é enfrentar a própria essência da escuridão e da luz, criando um clímax emocionante e recompensador para a jornada do protagonista.'
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