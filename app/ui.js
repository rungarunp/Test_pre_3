export function updateHUD(state){
  document.getElementById("xp").innerText = state.xp;
  document.getElementById("level").innerText = state.level;
}