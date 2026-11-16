const button=document.getElementById('submitBtn');

const form=document.getElementById('form');

const container=document.querySelector('.container');


const inputArea=document.querySelectorAll('.input');

const modal=document.querySelector('.modal');



form.addEventListener('submit',e=>{

    e.preventDefault();
})

button.addEventListener('click',e=>{

function showError(element,message){
const formControl=element.parentElement;
formControl.className='formControl error';
const p=formControl.querySelector('p');
p.textContent=message;

setTimeout(()=>{
p.textContent='';
formControl.classList.remove('error');
},2000)

}


function showSuccess(element,message){
    const formControl=element.parentElement;
    formControl.className='formControl success';
    const p=formControl.querySelector('p');
    p.textContent=message;

    setTimeout(()=>{
        p.textContent='';
        formControl.classList.remove('success');
        },2000)
    
    }



inputArea.forEach(input=>{

    if(input.value===''){

        showError(input,'please type something');
        
    }else{

        showSuccess(input,'yes that is correct');
  
        
    }
})



const allFilled = Array.from(inputArea).every(input => {
    return input.value.trim() !== '';
});

if (allFilled) {
    modal.classList.add('show');
const introduction=document.querySelector('.introduction');

const name=document.getElementById('name');
const email=document.getElementById('email');

introduction.innerHTML=`<p>${name.value} and my email is ${email.value}</p>`;

setTimeout(()=>{

    modal.classList.remove('show');
},2000)
}






});