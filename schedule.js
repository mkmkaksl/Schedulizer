const submitBtn = document.querySelector(".schedule-maker button[type='submit']");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let description = document.querySelector('.schedule-maker #description')
    description = description.value;

    if (description.length < 1) {
        alert("Please enter a description");
        return;
    }

    let day = document.querySelector('.schedule-maker #day')
    day = day.value.toLowerCase();

    let startTime = document.querySelector('.schedule-maker #startTime')
    startTime = startTime.value;

    let endTime = document.querySelector('.schedule-maker #endTime')
    endTime = endTime.value;

    if (startTime == '' || endTime == '') {
        alert("Please enter a start and end time");
        return;
    }

    if (startTime > endTime) {
        alert("Start time must be before end time");
        return;
    }

    const container = document.querySelector(`.cur-schedule #${day} table tbody`)
    let tableHtml = `
    <tr>
        <td>${startTime}-${endTime}</td>
        <td>${description}</td>
    </tr>`
    container.innerHTML += tableHtml;
    

})