let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]
//Prompt 1: double the hitpoints of everyone in the party
party.map(el =>  el.hitpoints=el.hitpoints*2);

console.log(party);

//Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp

const SubtractPoints=party.forEach(el => { if(el.name=="Timothy")
{
    el.hitpoints=el.hitpoints-5;
}});
console.log(party[1]);

//Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it

party[2].companion.type="jellyfish";
console.log(party[2]);

//Prompt 4: Timothy drank this potion. 
//Raise his hitpoints by 20 and remove "potion" from his belongings.
const RaisePoints=party.forEach(el => { if(el.name=="Timothy")
{
    el.hitpoints=el.hitpoints+20;
    el.belongings.splice(1,1);
}});
console.log(party[1]);


//Prompt 5: Timothy got hungry and stole Joline's bread. 
//Take it out of her belongings and put it  into Timothy's belongings.

const changeBelongings=party.forEach(el => { if(el.name=="Joline"){
    el.belongings.splice(el.belongings.indexOf("bread"),1);
    //console.log("removed"+ el.belongings.slice(1,2));
}else if (el.name=="Timothy"){
    el.belongings.push("bread");
} 
});
console.log(party);

//Prompt 6: Joline got upset and left the party. Take her out of the array. 

const removeJoline=party.forEach(el => { if(el.name=="Joline"){
    party.splice(party.indexOf(el),1);    
}});
console.log(party);

//Prompt 7: Timothy and Sarah have been recruiting. 
//Add a new adventurer to the party. (new adventurer is parameter)
const adventurer={
    name: 'Adventurer',
    hitpoints: 100,
    belongings: ["bag", "water", "food"],
    companion: {
        name: "foo",
        type: "cat",
    }
}

const addAdeventurer=(adventurer)=>{party.push(adventurer);}
addAdeventurer(adventurer);
console.log(party);


//Prompt 8: The party has been doing well! They found 200 gold.
// Create a new property called gold and split the gold evenly between everyone.
// (amount of gold is parameter)
const addGold=(gold)=>party.forEach(el=>el.Gold=gold/party.length);
addGold(200);
console.log(party);


//Prompt 9: Sarah is tired of taking care of a jellyfish. 
//Subtract some gold from her and change her companion to a bear. 

const subGldchngCmp=(gold,companion)=>party.forEach(el=>{
    if(el.name=="Sarah"){
       el.Gold=el.Gold-gold;
       el.companion.type=companion;
    }
});
subGldchngCmp(20,"bear");
console.log(party);

//Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" 
const changeSword=party.forEach(el=>{
    if(el.name=="Timothy"){
       el.belongings[0]="Rusty Sword";
    }
});
console.log(party);

//Prompt 11: Write a function called setLeader that takes a name as a parameter. 
//The member with that name should have a new property leader: 
//true while the other members have leader: false.
const setLeader=(Name)=>{
    party.forEach(el=>{if(el.name==Name){
       el.leader=true;
    }
    else{
        el.leader=false;
    }
});
}
setLeader("Sarah");
console.log(party);



