/* console.log("Hey!");

const hamster = {
    fluffy: true, 
    name: "Hammond",
    age: 40, 
    legs: 3, 
    children: ["Captain Hook", "Peter Pan", "Sally"], 
    nickname: "Ham Sir",
    chewing: function chew(what) {
        console.log("chewing", what);
    }
}

    for (let i = 0; i < hamster.children.length; i++){
        console.log(`Hamster children: ${i} is ${hamster.children[i]}`);

    }
*/


/** 

const empStB = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(`Dimentions are: ${empStB.height}, ${empStB.squareFeet}, ${empStB.eastWestLength}, ${empStB.northSouthLength}`)






const NuttyBuddy= {
    shape: "rectangle", 
    color: "brown", 
    varities: ["Christmas", "BackToSchool"] 
}

const Brownie = {
    shape: "square",
    color: "brown", 
    varities: ["Christmas", "BackToSchool"]
}

const Cake = {
    shape: "square", 
    color: "brown", 
    varities: ["Christmas", "BackToSchool", "Valentines", "MothersDay"]
}
const littleDebbies = ["NuttyBuddy", "Brownie", "Cake"];
console.log(littleDebbies)

Lightning Excercises */

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
/*
Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. 
He contributed heavily to the Magical Myster Tour Album. */
console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}He contributed heavily to the ${beatles.albums[3]}Album.`);



