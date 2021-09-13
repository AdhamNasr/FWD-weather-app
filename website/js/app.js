/* Global Variables */

const apiKey = "a4f51ad690e9ee6c6ecbd5e53929f9b4"
const generate = document.getElementById("generate")
const zipCode = document.getElementById("zip")
const feelings = document.getElementById("feelings")

// Dynamic date instance

let d = new Date();
let newDate = d.getMonth()+1 +' . '+ d.getDate()+' . '+ d.getFullYear();

// Event Listeners

generate.addEventListener("click", async () => {
    const userZipcode = zipCode.value
    let userFeeling = feelings.value;

    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${userZipcode}&appid=${apiKey}`

    const res = await fetch(url)
    let data = await res.json()
    
    const temp = data.main.temp

    await fetch('/currentData', {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON.stringify({
            date: newDate,
            temp: temp,
            feelings: userFeeling
        })
    });
    const resData = await fetch('/storedData')
    const finalData = await resData.json()

        console.log(finalData)
        document.getElementById('date').innerHTML = finalData.date;
        document.getElementById('temp').innerHTML = finalData.temp;
        document.getElementById('content').innerHTML = finalData.feelings
});