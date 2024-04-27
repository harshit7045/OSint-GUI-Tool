const favMovie = "Animal";

guess = prompt("guess you fav. movie");
while((guess!=favMovie)&&(guess!="quit")){
    guess = prompt("Wrong guess... please try again");
}