function buttonone(){
    document.getElementById('imgchange').src = "imgs/44BC.jpg" // changes image
    document.getElementById('titlechange').textContent = "Julius Caesar assassination" // changes title
    document.getElementById('textchange').textContent = "On March 15th 44 BC Julius Caesar is stabbed to death in Rome, Italy." // changes text
    document.getElementById('imgchange').alt = "A picture of Julius Caesar being assassinated."
}

function buttontwo(){
    document.getElementById('imgchange').src = "imgs/andrewjackson.png"
    document.getElementById('titlechange').textContent = "Andrew Jackson "
    document.getElementById('textchange').textContent = "Andrew Jackson was born on march 15th 1762."
}

function buttonthree(){
    document.getElementById('imgchange').src = "imgs/maine.png"
    document.getElementById('titlechange').textContent = "Maine "
    document.getElementById('textchange').textContent = "In 1820 Maine becomes a US state."
}

function buttonfour(){
    document.getElementById('imgchange').src = "imgs/Wilt.png"
    document.getElementById('titlechange').textContent = "Wilt Chamberlain"
    document.getElementById('textchange').textContent = "In 1962 Wilt Chamberlain is 1st to score 4,000 pts in an NBA season."
}

function buttonfive(){
    document.getElementById('imgchange').src = "imgs/firstdomain.png"
    document.getElementById('titlechange').textContent = ".com website"
    document.getElementById('textchange').textContent = "In 1985 The very first .com domain was registered."
}

function buttondefault(){
    document.getElementById('imgchange').src = "imgs/March15th.png"
    document.getElementById('titlechange').textContent = "Things that happened on my birthday."
    document.getElementById('textchange').textContent = "Click on the buttons below to see somethings that happened on my birthday."

}