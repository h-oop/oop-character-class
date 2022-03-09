//define
class Character {
    constructor(name, phrase1, phrase2){
      this.name = name;
      this.phrase1 = phrase1;
      this.phrase2 = phrase2;
      this.level = 0;
    }
    
    speak(phraseNum) {
      if (phraseNum == 1) {
        console.log(this.phrase1);
        
      } else if (phraseNum == 2) {
        console.log(this.phrase2);
      }
    }
  
    setLevel(newLevel) {
      this.level = newLevel;
    }
}
  
//create
let glados = new Character("GLaDOS", "Oh, it's you.", "For science. You monster.");
let wheatley = new Character("Wheatley", "You may have a minor case of serious brain damage", "I am NOT a MORON!");

//communicate
glados.speak(1);
glados.setLevel(5);
wheatley.speak(2);