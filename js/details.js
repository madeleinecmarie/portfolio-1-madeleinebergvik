document.querySelector('.loader').innerHTML = `
<lottie-player src="https://assets6.lottiefiles.com/packages/lf20_cH6EFa.json"  background="#E7DBCF"  speed="1"  style="width: 600px; height: 600px;"  loop  autoplay></lottie-player>
`;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getPostId(postId) {
    try {
        const response = await fetch('https://noroffcors.herokuapp.com/https://portfolio.mcmo.tech/wp-json/wp/v2/posts/' + postId);
        const results = await response.json();
      
        document.title = results.title.rendered;
        document.querySelector('.post__container-2').innerHTML += `
        <div class="details__div">
        <h1 class="h1__details">${results.title.rendered}</h1>
        <p>${results.content.rendered}</p>
        </div>
        `;

        // <div class="post__img images${results.id}"></div>
        // document.querySelector(`.images${results.id}`).style.backgroundImage = `url(${results.better_featured_image.media_details.sizes.medium_featured.source_url})`;
        
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
  
getPostId(id);