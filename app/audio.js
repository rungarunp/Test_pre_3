export function speak(text){
  speechSynthesis.cancel();
  let u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  speechSynthesis.speak(u);
}