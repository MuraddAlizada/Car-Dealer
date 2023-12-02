
const data = [
    {   
        name : "Bmw 540" ,
        year: "2023" ,
        colour : "Black" , 
        engine: "3.0L/335hp/Gasoline",
        price: "80000$" ,
        img : "https://ymimg1.b8cdn.com/resized/car_model/8263/pictures/9133089/mobile_listing_main_14791_st1280_046.jpg"
    } ,
    {   
        name : "BMW XM" ,
        year: "2024" ,
        colour : "Black" , 
        engine: "4.4L/644hp/Hybrid",
        price: "165000$",
        img : "https://pictures.dealer.com/s/sonicbeverlyhillsbmw/1894/4d17d82e26af1506cbe7fc32f5a42672x.jpg?impolicy=downsize_bkpt&imdensity=1&w=520"
    } ,
    {   
        name : "BMW i7" ,
        year: "2024" ,
        colour : "Black" , 
        engine: "0.0L/544hp/Electric",
        price: "110000$" ,
        img : "https://vehicle-images.dealerinspire.com/a270-18003207/WBY53EJ04RCR26775/072a8b9bec5903c4a04bfa5a51944924.jpg"
    } ,
    {   
        name : "BMW M8 Convertible" ,
        year: "2024" ,
        colour : "White" , 
        engine: "4.4L/617hp/Gasoline",
        price: "145000$" , 
        img : "https://images.dealer.com/autodata/us/640/color/2024/USD40BMC912A0/300.jpg"
    } ,
   
    {   
        name : "Porsche Taycan" ,
        year: "2024" ,
        colour : "Black" , 
        engine: "0.0L/408hp/Electric",
        price: "95000$" , 
        img : "https://images.dealer.com/autodata/us/640/color/2024/USD40PRC201A0/A1.jpg"
    } ,
    {   
        name : "Audi RS Q8" ,
        year: "2023" ,
        colour : "Black" , 
        engine: "4.0L/591hp/Gasoline",
        price: "130000$" , 
        img : "https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f43580c1e3d8e88cb10/stills_0640_png/MY2022/15297/15297_st0640_116.png"
    } 
    ,
    {   
        name : "Mercedes S580" ,
        year: "2024" ,
        colour : "White" , 
        engine: "4.0L/496hp/Gasoline",
        price: "95000$" ,
        img: "https://vehicle-images.dealerinspire.com/stock-images/chrome/328f5533f27c10c9a0ee3635836afa71.png"
    } ,
    {   
        name : "Mercedes G500" ,
        year: "2023" ,
        colour : "White" , 
        engine: "4.0L/416hp/Gasoline",
        price: "150000$" ,
        img : "https://vehicle-images.dealerinspire.com/stock-images/chrome/8c1755b11109fe2d76d32528140be869.png"

    } ,
    {   
        name : "Mercedes GLS600" ,
        year: "2023" ,
        colour : "Black" , 
        engine: "4.0L/557hp/Gasoline",
        price: "170000$" , 
        img : "https://vehicle-images.dealerinspire.com/stock-images/thumbnails/large/chrome/ce63a8344e6c95cfd3cac63b57101371.png"
    } ,
   
   
  
];


const cardList = document.querySelector("#cardList")

const newData = data.map((item) => {    


    return `        
    <div class="card " style="width: 24rem;">
    <img class="img-fluid" 
    src="${item.img}"   >
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.year}</p>
      <p class="card-text">${item.engine}</p>
      <p class="card-text">${item.colour}</p>
      <h4 class="card-text">${item.price}</h4>
    
    </div>
  </div>  
    `
}).join('')
console.log(newData);

cardList.innerHTML = newData

