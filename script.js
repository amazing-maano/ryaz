let names = ['Inderpreet', 
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
  
  let randomName = names[Math.floor(Math.random() * names.length)];
  
  document.getElementById('name').innerHTML = randomName;