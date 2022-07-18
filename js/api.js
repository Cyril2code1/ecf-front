fetch('https://c3f93ot0.directus.app/items/Prestations')
.then(response => response.json())
.then(datas => {
    datas.data.forEach(benefit => {
        let title = benefit.title;
        let desc = benefit.desc;
        let price = benefit.price;
        if (price === null) {price = "sur mesure"};
        if (typeof(price) === 'number') {price += '€'};
        

        const benefits = document.querySelector('.benefits');
        const div = 
        `
        <div class="row">
            <div class="column benefit-title">${title}</div>
            <div class="column benefit-desc">${desc}</div>
            <div class="column benefit-price">${price}</div>
        </div>
        `;
        
        benefits.innerHTML += div;

    });
})
.catch(error => alert("Erreur lors de la récupération des prestations: " + error));



fetch('https://c3f93ot0.directus.app/items/Categories')
.then(response => response.json())
.then(datas => {
    datas.data.forEach(category => {
        let id = category.id;  
        let name = category.name;
        
        const btnCategories = document.querySelector('.btn-categories');
        const btn =
        `
        <button class="cat-btn" id="cat-${id}">${name}</button>
        `;

        btnCategories.innerHTML += btn;
    });
})
.catch(error => alert("Erreur lors de la récupération des catégories: " + error));



fetch('https://c3f93ot0.directus.app/items/Photos')
.then(response => response.json())
.then(datas => {
    datas.data.forEach(photo => {
        let category = photo.category;
        let picture = "https://c3f93ot0.directus.app/assets/" + photo.picture;
        let title = photo.title;

        const photos = document.querySelector('.photos');   
        const figure = 
        `
        <figure class="cat cat-${category}">
            <img src="${picture}" alt="${title}">
            <figcaption>${title}</figcaption>
        </figure>
        `;
        
        photos.innerHTML += figure;
        
    });
})
.catch(error => alert("Erreur lors de la récupération des photos: " + error));

  



  