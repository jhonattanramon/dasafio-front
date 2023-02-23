async function requisicao() {
 
  let {products, nextPage} = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${1}`).then((res)=>res.json()).then( (response) =>response)
   
   
   //api2 = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${2}`).then((res)=>res.json()).then( (response) =>response)
    
    api = products
 
 console.log(products);
 console.log(nextPage);

 
}



requisicao()





