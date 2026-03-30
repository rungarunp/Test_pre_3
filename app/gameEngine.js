export let state = {
  level: 1,
  xp: 0,
  world: 1,
  mode: "match"
};

export function nextLevel(){
  state.level++;
  state.xp += 10;

  if(state.level % 5 === 0){
    state.world++;
  }
}