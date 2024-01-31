const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

document.getElementById('dice').addEventListener('click', () => {
    const randomized_number = getRandomIntNumberInRange(1,6)
    
       

switch (randomized_number) {
    case 1:
        document.getElementById('dice').innerHTML = '<img src="./images/dice1.png">'
        break
    case 2:
        document.getElementById('dice').innerHTML = '<img src="./images/dice2.png">'
        break
    case 3:
        document.getElementById('dice').innerHTML = '<img src="./images/dice3.png">'
        break
    case 4:
        document.getElementById('dice').innerHTML = '<img src="./images/dice4.png">'
        break
    case 5:
        document.getElementById('dice').innerHTML = '<img src="./images/dice5.png">'
        break
    case 6:
        document.getElementById('dice').innerHTML = '<img src="./images/dice6.png">'
        break
}
  

})