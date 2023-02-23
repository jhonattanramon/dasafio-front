class Componentes {
	
	
	constructor(name, description, img, oldPrice, price,installments ){
		
		this.name = name,
		this.description = description,
		this.img = img,
		this.oldPrice = oldPrice,
		this.price = price,
		this.installments = installments
		
	}
	
	renderComponeteCardProduto(){
		
		const componete = `
		
		 
         
         <div class="cardProduto" >
          
            <div>
               <img src="${this.img}" alt="">
            </div>
           
           <div >
           	<p> ${this.name}</p>
           </div>
            
           
            <div>
             <p> ${this.description}</p> 
            </div>
            
            <div>
              <p class="lastPreco"> De: ${this.oldPrice}</p>
              <h3 class="newPreco">Por: ${this.price}</h3>
              <p class ="parcelamento">ou ${this.installments.count}x De:${this.installments.value}  </p>
            </div>
            
            <div>
              <button class='baseBt' >Comprar</button>
            </div>
            
         </div>
         `
		
		return componete
		
	}
}