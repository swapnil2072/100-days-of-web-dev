function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please enter custom players for players");
    return;
  }
  gameAreaElement.style.display = "block";
}
