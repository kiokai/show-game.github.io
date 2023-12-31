function createArrow(id) {
  const i = document.createElement("i")
  i.className = `fas fa-arrow-${id}`

  return i
}

function generateArray() {
  const lists = []
  const arrow = ["up", "down", "left", "right"]

  for (var i = 0; i < 10; i++) {
    const rand = Math.floor(Math.random() * 3)
    lists.push({
      id: arrow[rand]
    })
  }

  return lists
}

function generateArrow() {
  document.getElementById("show").innerHTML = ""
  const lists = generateArray()

  for (var list of lists) {
    const i = createArrow(list.id)
    const div = document.createElement("div")

    div.appendChild(i)
    document.getElementById("show").appendChild(div)

  }

  return lists
}

function coutdown() {

}

function Game(lists) {
  var start = 0
  const control = document.querySelectorAll("#button button")
  const show = document.querySelectorAll("#show div")


  function check(id) {
    if (lists[start].id == id) {
      show[start].style.color = "green"
      start++

      if (start == 10) {
        text.innerHTML = "You Win"
        clearInterval(gs)
        cout = 20
        buttonStart.style.display = "block"
      }
    } else {
      show[start].style.color = "red"
      clearInterval(gs)
      cout = 20
      
      text.innerHTML = "You Lose"
      buttonStart.style.display = "block"
      db(true)
    }
  }

  for (var i of control) {
    i.onclick = function() {
      check(this.id)
    }
  }

  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
        check("left")
        break;
      case 38:
        check("up")
        break;
      case 39:
        check("right")
        break;
      case 40:
        check("down")
        break;
    }
  };

}

function db(id){
  const button = document.querySelectorAll("#button button")

  for(var i of button){
    i.disabled = id
  }
}


var cout = 20
var gs
const text = document.getElementById("text")
const buttonStart = document.getElementById("start")



window.onload = function() {

  buttonStart.onclick = () => {
    db(false)
    buttonStart.style.display = "none"
    text.innerHTML = ""

    const lists = generateArrow()
    const time = document.getElementById("time")


    Game(lists)

    gs = setInterval(() => {
      time.innerHTML = cout

      cout--

      if (cout < 0) {
        clearInterval(gs)
        cout = 20

        text.innerHTML = "You Lose"
        buttonStart.style.display = "block"
        db(true)
      }
    }, 100)
  }
}
