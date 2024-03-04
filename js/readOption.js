


const readMark = document.getElementById('read-Mark');
const clickNumber = document.getElementById('click-number');

let count = 0;

const handelShowTitle = (name,view) =>{

    // console.log(name,view);
    
    const readMarkInfo = document.createElement('div');
    readMarkInfo.classList = `flex gap-5 bg-white  p-3 rounded-xl shadow-xl mt-3 items-center justify-between`;

    readMarkInfo.innerHTML = `
    
    <div class=""><p>${name}</p></div>
    <div class=" flex items-center "><i class="fa-regular fa-eye"></i><p> ${view}</p></div>
    
    `;
    readMark.appendChild(readMarkInfo)
    
    console.log(count);
   count += 1;
   console.log(count);


   clickNumber.innerHTML = `(${count})`

}



