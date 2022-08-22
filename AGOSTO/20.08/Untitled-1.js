const qualifications = [4,8,5,10,11,8,4,5,9,12]

let exceedsExpectations = 0;
let pass = 0;
let failed = 0;
let counter = 0;

while(counter < qualifications.length){

    if(qualificationsExceedsExpectations()){
        exceedsExpectations ++
    }else if (qualificationsIsEnough()){
        pass ++
    } else {
        failed ++
    }
    counter ++
}
console.log('Superan expectativas: '+ exceedsExpectations)
console.log('Pasaron: '+pass)
console.log('Marcharon: '+failed)



function qualificationsIsEnough() {
    return qualifications[counter] >= 4;
}

function qualificationsExceedsExpectations() {
    return qualifications[counter] >= 9;
}
 