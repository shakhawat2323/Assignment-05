// function donate(){
//     document.getElementById(id).add


// }

// Donate for Flood at Noakhali, Bangladesh section

document.getElementById('donate-btn').addEventListener('click',function(){


    const donateInput = parseFloat(document.getElementById('input-donate-btn-01').value);
    const donatedAmount =  parseFloat( document.getElementById('donateted-amount').innerText);
    const mainBalanec = parseFloat(document.getElementById('main-balanec').innerText);
   
        const balanecToinputammount = mainBalanec - donateInput;
        // console.log(balanecToinputammount)
       
        if( isNaN(balanecToinputammount) || balanecToinputammount <= 0){
            alert('plz stop your acoount is Zro')
            return ;
        }

        if(isNaN(donateInput) || donateInput <= 0){
            alert('tomar account tk nai')
            return;
        }
        const  mainbalanceUpdate = document.getElementById('main-balanec').innerText=balanecToinputammount;

        const nohakhali = donateInput +  donatedAmount;
        document.getElementById('my_modal_6').showModal();
        const nohakhalidoneteblane=document.getElementById('donateted-amount').innerText=nohakhali;
  
})

// Donate for Flood at Noakhali, Bangladesh section


document.getElementById('donate-btn2').addEventListener('click',function(){


    const donateInput = parseFloat(document.getElementById('input-donate-btn-02').value);
    const donatedAmount =  parseFloat( document.getElementById('donateted-amount02').innerText);
    const mainBalanec = parseFloat(document.getElementById('main-balanec').innerText);
   
        const balanecToinputammount = mainBalanec - donateInput;
        // console.log(balanecToinputammount)
       
        if( isNaN(balanecToinputammount) || balanecToinputammount <= 0){
            alert('plz stop your acoount is Zro')
            return ;
        }

        if(isNaN(donateInput) || donateInput <= 0){
            alert('tomar account tk nai')
            return;
        }
        const  mainbalanceUpdate = document.getElementById('main-balanec').innerText=balanecToinputammount;

        const nohakhali = donateInput +  donatedAmount;
        document.getElementById('my_modal_6').showModal();
        const nohakhalidoneteblane=document.getElementById('donateted-amount02').innerText=nohakhali;
  
})

// Donate for Flood at Noakhali, Bangladesh section

document.getElementById('donate-btn03').addEventListener('click',function(){


    const donateInput = parseFloat(document.getElementById('input-donate-btn-03').value);
    const donatedAmount =  parseFloat( document.getElementById('donateted-amount3').innerText);
    const mainBalanec = parseFloat(document.getElementById('main-balanec').innerText);
   
        const balanecToinputammount = mainBalanec - donateInput;
        // console.log(balanecToinputammount)
       
        if( isNaN(balanecToinputammount) || balanecToinputammount <= 0){
            alert('plz stop your acoount is Zro')
            return ;
        }

        if(isNaN(donateInput) || donateInput <= 0){
            alert('tomar account tk nai')
            return;
        }
        const  mainbalanceUpdate = document.getElementById('main-balanec').innerText=balanecToinputammount;

        const nohakhali = donateInput +  donatedAmount;
        document.getElementById('my_modal_6').showModal();
        const nohakhalidoneteblane=document.getElementById('donateted-amount3').innerText=nohakhali;
  
})







document.getElementById('history-tab').addEventListener('click',function(){
   
    const donateInput = parseFloat(document.getElementById('input-donate-btn-01').value);
    const d = new Date(); 
       
    const p= document.createElement('p');
    p.innerText =`${donateInput} tk jok kora holo
     ${d}`
    // div.appendChild(p)
    document.getElementById('showHistory').appendChild(p)



    
})

document.getElementById('donate-btn').addEventListener('click',function(){
    
    
    const b = new Date();
    const donateInput = parseFloat(document.getElementById('input-donate-btn-01').value);

    const p = document.createElement('p');
    p.innerText=` ${donateInput} kmon aco tumi dos
    ${b}`
    document.getElementById('showHistory').appendChild(p)
})






function ShowAndHidden(id){
    
    //  document.getElementById('main-section').classList.add('hidden');
     document.getElementById('showHistory').classList.add('hidden');
     
    
     document.getElementById(id).classList.remove('hidden')
}

document.getElementById('donation-tab').addEventListener('click',function(){

    // ShowAndHidden('main-section');
    
    const DonateTab = document.getElementById('donation-tab')
     const historyTab = document.getElementById('history-tab')
     
     historyTab.addEventListener('click',function(){
   
        DonateTab.classList.add(
    'bg-[#B4F461]'
   )

   historyTab.classList.remove('bg-[#B4F461]')
    
})

})

document.getElementById('history-tab').addEventListener('click',function(){

    // ShowAndHidden('showHistory');
    const history = document.getElementById('showHistory')
    const mainsection = document.getElementById('main-section')
    const historyTab = document.getElementById('history-tab')

    mainsection.classList.add('hidden')
    history.classList.remove('hidden')

     const DonateTab = document.getElementById('donation-tab')
     historyTab.classList.add('bg-[#B4F461]')
     DonateTab.classList.remove('bg-[#B4F461]')  
 })
    
document.getElementById('donation-tab').addEventListener('click',function(){

    // ShowAndHidden('showHistory');
    const history = document.getElementById('showHistory')
    const mainsection = document.getElementById('main-section')
    const historyTab = document.getElementById('history-tab')
    console.log(mainsection)

    history.classList.add('hidden')
    mainsection.classList.remove('hidden')

     const DonateTab = document.getElementById('history-tab')
     DonateTab.classList.add('bg-[#B4F461]')
     historyTab.classList.remove('bg-[#B4F461]')  

     console.log('hi kmon aco dos')
 })
    
    

 





