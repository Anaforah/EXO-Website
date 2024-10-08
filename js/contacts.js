      document.addEventListener("DOMContentLoaded", function() {
        let button = document.getElementById("button");
        let input = document.getElementById("search");

        function handleClick(event) {
          event.preventDefault();

          if (input.value.trim() !== '') {
            fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
              .then(function(info) {
                return info.json();
              })
              .then(function(superheroes) {
                displaySuperheroes(superheroes);

                button.removeEventListener("click", handleClick);
                button.disabled = true;
              });
          }
        }

        button.addEventListener("click", handleClick);

function displaySuperheroes(superheroes) {
    let div = document.createElement("div");

    let membersList = document.createElement("ul");
    for (let i = 0; i < superheroes.members.length; i++) {
      let member = superheroes.members[i];
      let memberItem = document.createElement("li");
      memberItem.classList.add("css");
      memberItem.innerHTML = `<strong>Name:</strong><p>${member.name}</p><br>
                              <strong>Age:</strong><p>${member.age}</p><br>
                              <strong>Secret Identity:</strong> <p>${member.secretIdentity}</p>`;

      let power = document.createElement("strong");
      power.innerHTML = `Powers:`;
      memberItem.appendChild(power);

      let listaol = document.createElement("ol");
      for (let j = 0; j < member.powers.length; j++) {
        let ordem = document.createElement("li");
        ordem.innerHTML = `<p>${member.powers[j]}</p>`;
        listaol.appendChild(ordem);
      }

      memberItem.appendChild(listaol);
      membersList.appendChild(memberItem);
    }

    div.appendChild(membersList);
    document.querySelector('.first').appendChild(div);
  }
});