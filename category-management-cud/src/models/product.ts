export interface Product {
    id: number
    name: string
    category_id: string
    category_name: string
    type_id: string
    type_name: string
    brand: string
    series: string
    technical_parameter: string
    created_at?: Date
    updated_at?: Date
}