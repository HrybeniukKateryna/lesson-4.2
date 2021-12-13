function typeNum() {
    let num;
    do {
        num = prompt('Enter your number');
        if (Number(num) > 0) {
            alert('Your number positive');
        } else if (Number(num) < 0) {
            alert('your number negative');
        } else if (Number(num) == 0) {
            alert('Its null');
        } else if (num == 'exit') { break; }
        else {
            alert('Enter your number!');

        }

    } while (num !== 'exit')
};

typeNum();

