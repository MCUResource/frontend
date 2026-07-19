//we are going to make an even listener.. it will trigger when the DOM is loaded (aka upon visiting webpage)
addEventListener("DOMContentLoaded", async function(){
    const response = await fetch("https://backend-meq1.onrender.com/api/songs")
    const songs = await response.json()

    let html = ""
    for (let song of songs) {
        html +=`<li>${song.title} - ${song.artist}</li>`
    }

    document.querySelector("#addedsong").innerHTML = html

})
