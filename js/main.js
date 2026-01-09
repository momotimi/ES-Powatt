
const hidden_paragraph = document.querySelector('.hidden-p');
const p_hidden = document.querySelector('.p-hide');
const show_p_button = document.querySelector('.p-show-more');

show_p_button.addEventListener('click', () => {
    hidden_paragraph.style.display = 'block'
    p_hidden.style.display = 'block';
    show_p_button.style.display = 'none';
});

p_hidden.addEventListener('click', () => {
    hidden_paragraph.style.display = 'none';
    p_hidden.style.display = 'none';
    show_p_button.style.display = 'block';
});