const selectors = document.querySelector('.btn-categories');

selectors.addEventListener('click', function(e) {
    const selected = e.target.id;

    const photos = document.querySelectorAll('.cat');
    photos.forEach(function(photo) {
        photo.classList.add("hidden");
    });
    
    const selection = document.querySelectorAll('.' + selected);
    selection.forEach(function(photo) {
        photo.classList.remove("hidden");
    })
});
