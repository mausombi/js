function gold (weight,year) {
    this.weight=weight;
    this.year=year;
} 
gold.prototype.calculator= function (){
    let old_price= prompt("How much did you buy it for?");
    per_g_p=7,875;
    cur_price=per_g_p*this.weight;
    console.log(`You have made a profit of ${cur_price-old_price} in the matter of ${2024-this.year} years/`)
}
let shailesh_gold= new  gold(10,2004);
shailesh_gold.calculator();

