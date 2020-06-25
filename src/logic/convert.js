export function peel(pow, num) {
    var value = Math.pow(20, pow);
    for (var i = 0; i <= 20; i++) {
        if ((num - value * i) < 0) {
            return (i - 1);
        }
    }
    return (0);
}

export function convert(num10) {
    var temp;
    temp = num10;
    var highestPlace;
    var numerals = [];
    highestPlace = 0;
    while (temp >= 0) {
        highestPlace++;
        temp = num10 - Math.pow(20, highestPlace);
    }
    temp = num10;
    for (var i = highestPlace; i > 0; i--) {
        var value = peel(i-1, temp);
        numerals[highestPlace - i] = value;
        temp = temp - value * (Math.pow(20, i-1));
    }
    return numerals;
}
