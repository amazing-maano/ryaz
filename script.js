let namesArray = ['Inderpreet', 
            'Gauravjeet', 
            'Vigasdeep', 
            'Shaina', 
            'Hemant', 
            'Mandeep', 
            'Harry', 
            'Varmeet',
            'Sahib', 
            'Manii', 
            'Nandini', 
            'Kamal', 
            'Rajvir'
  ];


document.getElementById('cl').addEventListener('click', function(){
  let names = namesArray.sort();
  
  let randomName = names[Math.floor(Math.random() * names.length)];
  
  let result = document.getElementById('name');
  result.style.fontSize = '2.5em';
  result.innerHTML = randomName;
});
