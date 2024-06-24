const checkbox = document.getElementById('c1');
const toggleElement = document.getElementById('d1');


const checkbox1 = () => {
    console.log(toggleElement)
  if (checkbox.checked) {
    toggleElement.style.display = 'block'; 
  } else {
    toggleElement.style.display = 'none'; 
  }
};


checkbox.addEventListener('change', checkbox);

document.querySelectorAll

////////////////////////////////////////////////////////

const checkbox0 = document.getElementById('c2');
const toggleElement2 = document.getElementById('d2');


const checkbox2 = () => {
  console.log(toggleElement2)
if (checkbox0.checked) {
  toggleElement2.style.display = 'block'; 
} else {
  toggleElement2.style.display = 'none'; 
}
};

checkbox0.addEventListener('change', checkbox0);

document.querySelectorAll

////////////////////////////////////////////////////////

const checkbox00 = document.getElementById('c3');
const toggleElement3 = document.getElementById('d3');


const checkbox3 = () => {
  console.log(toggleElement3)
if (checkbox00.checked) {
  toggleElement3.style.display = 'block'; 
} else {
  toggleElement3.style.display = 'none'; 
}
};

////////////////////////////////////////////////////////

const checkbox000 = document.getElementById('c4');
const toggleElement4 = document.getElementById('d4');


const checkbox4 = () => {
  console.log(toggleElement4)
if (checkbox000.checked) {
  toggleElement4.style.display = 'block'; 
} else {
  toggleElement4.style.display = 'none'; 
}
};

///////////////////////////////////////////////////////////

const checkbox0000 = document.getElementById('c5');
const toggleElement5 = document.getElementById('d5');


const checkbox5 = () => {
  console.log(toggleElement5)
if (checkbox0000.checked) {
  toggleElement5.style.display = 'block'; 
} else {
  toggleElement5.style.display = 'none'; 
}
};

//////////////////////////////////////////////////////////

const checkbox00000 = document.getElementById('c6');
const toggleElement6 = document.getElementById('d6');


const checkbox6 = () => {
  console.log(toggleElement6)
if (checkbox00000.checked) {
  toggleElement6.style.display = 'block'; 
} else {
  toggleElement6.style.display = 'none'; 
}
};

/////////////////////////////////////////////////////////////

const checkbox000000 = document.getElementById('c7');
const toggleElement7 = document.getElementById('d7');


const checkbox7 = () => {
  console.log(toggleElement7)
if (checkbox000000.checked) {
  toggleElement7.style.display = 'block'; 
} else {
  toggleElement7.style.display = 'none'; 
}
};

///////////////////////////////////////////////////////

const checkbox0000000 = document.getElementById('c8');
const toggleElement8 = document.getElementById('d8');


const checkbox8 = () => {
  console.log(toggleElement8)
if (checkbox0000000.checked) {
  toggleElement8.style.display = 'block'; 
} else {
  toggleElement8.style.display = 'none'; 
}
};

//////////////////////////////////////////////////////////////

const checkbox00000000 = document.getElementById('c9');
const toggleElement9 = document.getElementById('d9');


const checkbox9 = () => {
  console.log(toggleElement9)
if (checkbox00000000.checked) {
  toggleElement9.style.display = 'block'; 
} else {
  toggleElement9.style.display = 'none'; 
}
};

//////////////////////////////////////////////////////////////

const checkbox000000000 = document.getElementById('c10');
const toggleElement10 = document.getElementById('d10');


const checkbox10 = () => {
  console.log(toggleElement10)
if (checkbox000000000.checked) {
  toggleElement10.style.display = 'block'; 
} else {
  toggleElement10.style.display = 'none'; 
}
};

////////////////////////////////////////////////////////

var div = document.getElementById("form")


function button()
{
  div.style.display="block";
  sessionStorage.setItem('rowData', JSON.stringify(selectedData));
    console.log('All data saved to sessionStorage:', selectedData);
  }
  

/////////////////////////////////////////////////////////////////////////

   let selectedData = [];

  function selectRow(radio) {
      const row = radio.parentElement.parentElement;
      const cells = row.querySelectorAll('td');
      let data = {};

      data['price'] = cells[2].textContent.trim();
      data['description'] = cells[3].textContent.trim();
      data['location'] = cells[4].textContent.trim();

      const detailElement = row.nextElementSibling.querySelector('pre');
      if (detailElement) {
          data['details'] = detailElement.textContent.trim();
      }

      selectedData.push(data);
      console.log('Row selected:', data);
  }
////////////////////////////////////////////////////////////////////////
          function generateCaptcha() {
              let captchaContainer = document.getElementById('captchaContainer');
              let randomNum = Math.floor(10000 + Math.random() * 90000);
              captchaContainer.innerText = randomNum;
              return randomNum;
          }
          var generatedCaptcha = generateCaptcha();
         
          const handleSubmit = (e) => {
            e.preventDefault(); 
            let userInput = document.getElementById('captchaInput');
             if (userInput.value != generatedCaptcha) {
                 alert('الرقم المدخل غير صحيح. يرجى المحاولة مرة أخرى.');
                 generatedCaptcha = generateCaptcha(); // توليد كابتشا جديدة
             } else {
                 window.location.href = "./productsDetails.html";
             } 
           
          }
          document.querySelector('#myform').addEventListener('submit', handleSubmit);