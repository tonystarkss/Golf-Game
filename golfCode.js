var name = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
//Array for the different stroke names
function golfScore(par, strokes) {
//Function created golf score where par is set and strokes
    if (strokes == 1) {
        return names[0]
        //Array name and the index 0 which is Hole-in-one!
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes == par - 1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes => par + 3) {
        return names[6]
    }
}

console.log(golfScore(5, 2)); 
//Depending on the par and stroke the cosnole will output the stroke name 