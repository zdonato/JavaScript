var hand = function(numHand){
    this.numHand = numHand;
    alert("This is hand number "+numHand+".");


var deal = function(){
    var card = Math.floor(Math.random()*53);
    return card;
};

var card1 = deal();
var card2 = deal();

var getValue = function(card){
    if (card % 13 === 0 || card % 13 >=11){
        return 10; 
    }
    else if (card % 13 === 1){
        return 11;
    }
    else {
        return card % 13;
    }
};

var getSuit = function(card){
    if (card >= 1 && card <= 13){
        return "spades";
    }
    else if (card>= 14 && card <=26){
        return "clubs";
    }
    else if(card >=27 && card <= 39){
        return "hearts";
    }
    else if(card >=40 && card<=52){
        return "diamonds";
    }
};

var score = function(){
    return getValue(card1) + getValue(card2);
};

alert("You were dealt a "+getValue(card1)+" of "+getSuit(card1)+ 
" and a "+getValue(card2)+ " of "+getSuit(card2)+" for a score of "+score()+".");

var hitOrStay = function(){

if(score() < 21){
    var decision = confirm("Would you like to hit?");
        if (decision === true){
            var card3 = deal();
            var secondScore = score()+getValue(card3);
            alert("You were dealt a "+getValue(card3)+" of "+getSuit(card3)+
            " for a new score of "+secondScore+".");
                if (secondScore <21){
                    var decision2 = confirm("Would you like to hit again?");
                        if (decision2 === true){
                            var card4 = deal();
                            var thirdScore = secondScore + getValue(card4);
                            alert("You were dealt a "+getValue(card4)+" of "+
                            getSuit(card4)+" for a new score of "+ thirdScore+".");
                                
                            if (thirdScore < 21){
                                var decision3 = confirm("Would you like to hit again?");
                                    if (decision3 === true){
                                        var card5 = deal();
                                        var fourthScore = thirdScore + getValue(card5);
                                        alert("You were dealt a "+getValue(card5)+ " of "+
                                        getSuit(card5)+" for a new score of "+fourthScore+".");
                                            if (fourthScore > 21){
                                                alert("Sorry you busted.");
                                            }
                                            else if(fourthScore === 21){
                                                alert("Winner!");
                                            }
                                    }
                                    else if (decision3 === false){
                                        alert("You chose to stay at "+thirdScore+".");
                                    }
                            }
                            else if (thirdScore === 21){
                                alert("Winner!");
                            }
                            else if (thirdScore > 21){
                                alert("Sorry you busted.");
                            }
                        }
                        else if (decision2 === false){
                            alert("You chose to stay at "+secondScore+".");
                        }
                         
                }
                else if (secondScore === 21){
                    alert("Winner!");
                }
                else if (secondScore > 21){
                    alert("Sorry you busted.");
                }
        }
        else if (decision === false){
            alert("You chose to stay at "+score()+".");
        }
        
}
else if (score()===21){
    alert("Blackjack!");
}
else if (score()>21){
    alert("Sorry you busted.");
}

};

hitOrStay();

};
