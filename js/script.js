document.querySelector('.loader').innerHTML = `
<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_cH6EFa.json"  background="#E7DBCF"  speed="1"  style="width: 600px; height: 600px;"  loop  autoplay></lottie-player>
`;

const postUrl = 'https://noroffcors.herokuapp.com/https://portfolio.mcmo.tech/wp-json/wp/v2/posts/';

const getPosts = async (url) => {
    try {
		const respone = await fetch(url);
		const posts = await respone.json();
        console.log(posts);

        document.querySelector('.h1__projects').innerHTML += `
        <h1 class="h1__post__cards">Hi! Let me show you some of my work,</h1>
        `;

        posts.forEach((value) => {
        document.querySelector('.post__container').innerHTML += `
        <div class="post__cards">
        <div class="post__cards__text">
        <h2 class="h2__post__cards">${value.title.rendered}</h2>
        <p class="p__post__cards">${value.excerpt.rendered}</p>
        <p class="id__link"><a href="details.html?id=${value.id}">Check full project
        </div>
        </div>
        `;

        // <div class="post__img images${value.id}"></div>
        // document.querySelector(`.images${value.id}`).style.backgroundImage = `url(${value.better_featured_image.media_details.sizes.medium.source_url})`;
   });

	} catch (err) {
      console.log(err);
       document.querySelector('.alert').innerHTML += showAlert(
        'An error has occured',
        'danger'
    );

    } finally {
        document.querySelector('.loader').classList.add('hide');
      }
}

getPosts(postUrl);