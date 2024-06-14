document.addEventListener('DOMContentLoaded', function() {
    // Función para insertar videos de YouTube
    function insertYouTubeVideo(videoId) {
        const videoSection = document.getElementById('videos');
        const iframe = document.createElement('iframe');
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        videoSection.appendChild(iframe);
    }

    // Lista de IDs de videos de YouTube
    const videoIds = ['mLQNI1SoQj8', '0Jh0MRMGOLY', 'b2ZqUDOcovc'];
    videoIds.forEach(insertYouTubeVideo);

    // Función para mostrar publicaciones del blog
    function insertBlogPost(title, content) {
        const blogSection = document.getElementById('blog');
        const post = document.createElement('div');
        post.classList.add('post');
        
        const postTitle = document.createElement('h3');
        postTitle.textContent = title;
        
        const postContent = document.createElement('p');
        postContent.textContent = content;

        post.appendChild(postTitle);
        post.appendChild(postContent);
        blogSection.appendChild(post);
    }

    // Ejemplo de publicaciones del blog
    const blogPosts = [
        { title: 'Primera Publicación', content: 'Este es el contenido de mi primera publicación.' },
        { title: 'Segunda Publicación', content: 'Este es el contenido de mi segunda publicación.' }
    ];
    blogPosts.forEach(post => insertBlogPost(post.title, post.content));

    // Crear contenedor para las balas
    const bulletContainer = document.createElement('div');
    bulletContainer.classList.add('bullet-container');
    document.body.appendChild(bulletContainer);

    // Función para crear balas cayendo
    function createBullet() {
        const bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bullet.style.left = `${Math.random() * 100}vw`;
        bullet.style.animationDuration = `${Math.random() * 3 + 2}s`;
        bulletContainer.appendChild(bullet);

        // Remover la bala después de que caiga
        bullet.addEventListener('animationend', () => {
            bullet.remove();
        });
    }

    // Crear balas cada cierto tiempo
    setInterval(createBullet, 1000);
});
