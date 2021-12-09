function typeNum () {
    let num;
    while (num !== "exit") {
        num = +prompt('Enter your number');
        if (num >0) {
           alert('Your number positive');
        } else if (num < 0) {
            alert('your number negative'); 
        } else if (num == 0) {
            alert('Its null');
        } else {
            alert('Enter your number!');
        }
        }
    }
   
    typeNum();
