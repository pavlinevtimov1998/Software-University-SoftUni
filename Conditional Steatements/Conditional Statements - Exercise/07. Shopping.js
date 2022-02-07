function shopping(input){
    
    let budget=Number(input[0]);
    let videoCards=Number(input[1]);
    let processors=Number(input[2]);
    let ram =Number(input[3]);
    
    let priceVideoCards=videoCards*250;
    let priceProcessors=priceVideoCards*0.35;
    let priceRam=priceVideoCards*0.10;
    
    let priceVideoCarsTotal=priceVideoCards;
    let priceProcessorsTotal=priceProcessors*processors;
    let priceRamTotal=ram*priceRam;
    let totalPrice=priceRamTotal+priceProcessorsTotal+priceVideoCarsTotal;
    
    if(videoCards>processors){
        totalPrice=totalPrice*0.85;
    }
    
    let levaLeft=Math.abs(budget-totalPrice);
 
    if(budget>=totalPrice){
        console.log(`You have ${levaLeft.toFixed(2)} leva left!`);
    }else{
        console.log(`Not enough money! You need ${levaLeft.toFixed(2)} leva more!`)
    }
}
shopping(["920.45","3","1","1"])