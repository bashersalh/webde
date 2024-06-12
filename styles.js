const checkboxes = document.querySelectorAll('input[type=checkbox]');

checkboxes.forEach((checkbox, index) => {
    const list = document.getElementById('mylist' + (index + 1));

    checkbox.addEventListener('change', function(){
        if(checkbox.checked){
            list.classList.remove('hidden');
        } else {
            list.classList.add('hidden');
        }
    });
});