let api;


const renderCards = () =>{
	
	
	
	let sectionCardProdutos = document.querySelector('#sectionCardProdutos');
	
	api.map(
		(index) => {
			
			
			let atributos = new Componentes(index.name, index.description, index.image,index.oldPrice, index.price,index.installments )
		
		
		sectionCardProdutos.innerHTML += atributos.renderComponeteCardProduto()
		}
		)
	
	
}


const checkApi = () => {
	
	setTimeout(
		()=> {
			if (api == undefined) return checkApi()
			
			renderCards()
		},100)
}

checkApi()




