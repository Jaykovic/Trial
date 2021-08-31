function ageInDays(){
    var birthYear = prompt('What year were you born?... coconut head');
    var daysOld = (2021-birthYear)* 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' +  daysOld  + ' days old' );
    h1.setAttribute('id', 'daysOld');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}