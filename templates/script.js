let namesArray = ['Inderpreet', 
            'Gauravjeet', 
            'Vigasdeep', 
            'Shaina', 
            'Hemant', 
            'Mandeep', 
            'Harry', 
            'Sahib', 
            'Manii', 
            'Nandini', 
            'Kamal', 
            'Rajvir'
  ];

document.getElementById('cl').addEventListener('click', function(){
    let names = namesArray.sort();
  
    let randomName = names[Math.floor(Math.random() * names.length)];

    let res = document.getElementById('name');
    res.style.fontSize = '2.5em';
    res.innerHTML = randomName;

    $.ajax({
    url: '/sendEmail',
    data: 'randomName='+randomName,
    type: 'POST',
    dataType: 'text',
    success: function(response) {
            console.log(response);
        },
    error: function(error) {
            console.log(error);
        }
    })

});

