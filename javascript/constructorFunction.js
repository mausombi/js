function car(name,fuel){
    this.name=name;
    this.fuel=fuel;
    this.sound=function(){
        if(this.fuel=="ev"){
            return `This car is an ev, it cannot make noise`
        }
        else{
            return `vroom`
        }
    };
}
let car2=new car("Maruti","Diesel");
console.log(car2);
console.log(car2.sound())