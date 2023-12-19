function func() {
    var currentDate = new Date();
    var endDate = new Date('04/01/2024');

    console.log(currentDate.dateString);
    // Разница в миллисекундах между текущей датой и датой окончания отсчета
    var difference = endDate - currentDate;

    if (currentDate > endDate && difference < 0) {
        clearInterval(intervalID);
    }

    // Рассчитываем необходимые значения (секунды, минуты, часы, дни, месяцы)
    var seconds = Math.floor((difference / 1000) % 60);
    var minutes = Math.floor((difference / 1000 / 60) % 60);
    var hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    var days = Math.floor(difference / (1000 * 60 * 60 * 24)) - 1;
    var months = Math.floor(days / 30);
    days -= months * 30;
    
    document.getElementById('M').innerHTML = months;
    document.getElementById('D').innerHTML = days;
    document.getElementById('h').innerHTML = hours;
    document.getElementById('m').innerHTML = minutes;
    document.getElementById('s').innerHTML = seconds;

}

setInterval(func, 1000);