import { readFile } from "fs"
import { writeFile } from "fs/promises"

class ProductService {

    async createProductList(data){

        try{
            await writeFile('products.json', JSON.stringify(data))
        
        }catch(error){
            throw new error
        }
    }

    async listaProducts(){
        const productList = await readFile('products.json', "utf-8")

        return JSON.parse(productList)
    }
    
    async getStock(){
        const productList = await this.listaProducts()
    
        const stockProducts = this.createProductList.map(item => {
        
            let stock = {
                nome: item.nome,
                qtde: item.qtde,
                preco: item.preco,
                valor_stock: item.qtde * item.preco      
            }
            return stock
    })
}
}
export default new ProductService()