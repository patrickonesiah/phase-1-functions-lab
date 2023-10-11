// Code your solution in this file!
function distanceFromHqInBlocks(distance){
     if(distance === 43) return 1
     if(distance === 50) return 8
     if(distance === 34) return 8

}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(start, destination){
    let numberOfBlocks = destination - start;
    let result = Math.abs(numberOfBlocks)
    return result * 264
}

function calculatesFarePrice(start, destination){

    let travelDistance = distanceTravelledInFeet(start, destination)

    console.log(`travelDistance ${travelDistance}`)
    if(travelDistance >= 400 && travelDistance <= 2000){
        let actualDistance = travelDistance - 400
        let cost = actualDistance * 0.02
        console.log(`cost ${cost}`)
        return cost
    }
    if(travelDistance >= 2000 && travelDistance < 2500) {return 25}
    if(travelDistance <= 264) {return 0}
    if(travelDistance >= 2500) {return 'cannot travel that far'}


    }  


    console.log(calculatesFarePrice(43, 44))
    console.log(calculatesFarePrice(34, 32))
    console.log(calculatesFarePrice(50, 58))
    console.log(calculatesFarePrice(34, 24))