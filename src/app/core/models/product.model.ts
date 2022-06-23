
export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: Category
    images: string[]
}

export interface Category {
    id: number,
    name: string,
    image: string
}

//interfaz que hereda los atributos de producto y omite los valores de id y categoria
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'>{
    categoryId: number
}

//interfaz que hereda los atributos de create_product_dto e indica como opcionales todos los atributos que la conforman
export interface UpdateProductDTO extends Partial<CreateProductDTO>{

}