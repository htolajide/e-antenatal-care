const question = document.querySelector('#question');
        const submit = document.querySelector('#submit');
        const success = document.querySelector('.success');
        const error = document.querySelector('.error');
        const booking = document.querySelector('#booking');
        const ans_btn = document.querySelector('.ans-button');
        const answer_box = document.querySelector('.answer-box');
        const answer = document.querySelector('#answer');
        const box_answer = document.querySelector('#answer-box');

        
        booking.addEventListener('click', (event) => {
            window.location = "appointment.html";
            event.stopPropagation();
        });
        question.addEventListener('focus', (event) => {
            if (error.style.display ===  'block'){
                error.style.display = 'none';
            }else if  (success.style.display == 'block') {
                success.style.display = 'none';
            }
            event.stopPropagation();
        });
        
        submit.addEventListener('click', (event) => {
            if (question.value === ""){
                error.textContent = 'Please enter your qestion.';
                error.style.display = 'block';
            }else if (question.value.length > 5) {
                success.textContent = 'Question posted successfully, check question and answer page for a response';
                success.style.display = 'block';
            }
            event.stopPropagation();
        });

		// const url = "https://estimate-covid19.herokuapp.com/api/v1/on-covid-19/";
		// const btn = document.querySelector('.btn');
		// const numberFormat = (num) => {
		// 	let num_parts = num.toString().split(".");
		// 	num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		// 	return num_parts.join(".");
		// };
		// const setValue = (element, value) => {
		// 	element.value = numberFormat(value);
		// };
		// btn.addEventListener('click', (event) => {
		// 	event.preventDefault();
			
		// 	const parameter = {
		// 		method: 'post',
		// 		url: url,
		// 		data: data,
		// 	}
		// 	axios(parameter)
		// 	.then(mydata => { return mydata})
		// 	.then(myresult =>{
		// 		success.textContent = `Request successfull\n`;
		// 		error.style.display = 'none';
		// 	})
		// 	.catch(err => {
		// 		error.style.display = 'block';
		// 		error.textContent = `Error occured ${err}`;
		// 	})
		// 	console.log('button clicked');
		// });
		// setValues();