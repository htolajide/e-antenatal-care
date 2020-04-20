const success = document.querySelector('.success');
const error = document.querySelector('.error');
const ans_btn = document.querySelector('.ans-button');
const answer_box = document.querySelector('.answer-box');
const answer = document.querySelector('#answer');
const box_answer = document.querySelector('#answer-box');

ans_btn.addEventListener('click', (event) => {
    if (answer_box.style.display === 'none'){
        answer_box.style.display = 'block';
    }else {
        answer_box.style.display = 'none';
    }

});

box_answer.addEventListener('focus', (event) => {
    if (error.style.display ===  'block'){
        error.style.display = 'none';
    }else if  (success.style.display == 'block') {
        success.style.display = 'none';
    }
});

answer.addEventListener('click', (event) => {
    if (box_answer.value === ""){
        error.textContent = 'Please enter your answer.';
        error.style.display = 'block';
    }else if (box_answer.value.length > 5) {
        success.textContent = 'Response has been taken';
        success.style.display = 'block';
    }
});