function createProfile(obj,arr){
    const{name,age}=obj;
    const [primaryInterest,secondaryInterest]=arr;
    return {
        name,
        age,
        primaryInterest,
        secondaryInterest
    }
}

const ob={name:"barath",age:20};
const arr=[ 'Reading','Traveling'];

const newObj=createProfile(ob,arr);
console.log(newObj);
