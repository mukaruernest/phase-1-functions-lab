// Code your solution in this file!

const hq = 42
const distanceFromHqInBlocks = function (pickup) {
    const distance = hq - pickup
    return Math.abs(distance)
}

function distanceFromHqInFeet(value) {
    const inFeet = distanceFromHqInBlocks(value) * 264;
    return inFeet
}

// function distanceTravelledInFeet()
function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination)
    const toFeet = distance * 264
    return toFeet
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        const fourTwothousand = distanceTravelledInFeet(start, destination) - 400
        return fourTwothousand * 0.02
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    } else if (distanceTravelledInFeet(start, destination) > 2500) {
        return 'cannot travel that far'
    }
}
