function conversionTemperature (a) {
    return ((((9 / 5) * a) + 32)*100/100).toFixed(1);
}

let celsius = Number.parseFloat(prompt("Введите температуру в градусах Цельсия: "));
alert(`Цельсий: ${celsius}, Фаренгейт: ${conversionTemperature(celsius)}`);