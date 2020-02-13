
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();

    birthday = Date.parse(birthday);

    let diff = now - birthday,
        age = diff / (365.25 * 24 * 60 * 60 *1000);

    return age > 18
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    let sound = animal.sound
    if (animal == undefined){
        return null;
    } else {
        return sound;
    } 
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
   let average = 0;
   for (i = 0; i < marks.length; i++) {
       average += parseInt(marks[i]);
   }
   return Math.round(average / marks.length);
}
