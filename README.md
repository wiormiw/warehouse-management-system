# Warehouse Management System

## Simple warehouse-management-system with typescript (category management services)

### To Run App You Need To Configure
- NodeJS with Express and Typescript
- PostgreSQL (CUD Service)
- ElasticSearch (Read Service)
- RabbitMQ


### Query

"host":"port"/v1/(category/product/type) -> POST (Create Data)
"host":"port"/v1/(category/product/type)/id -> GET/PUT/DELETE
"host":"port"/v1/(categories/products/types) -> GET

### Req.Body Example:
#### Create:
Category:
```
{
    "name": "Firearm"
}
```
Type:
```
{
    "name": "SMG",
    "category_id": "05656966-9a21-4ee8-8b7c-18950a2fe30c"
}
```
Product:
```
{
    "name": "AK",
    "category_id": "05656966-9a21-4ee8-8b7c-18950a2fe30c",
    "type_id": "4201a6ce-1d70-4f7b-b237-c5f4b544abb7",
    "brand": "KALASHNIKOV",
    "series": "47",
    "technical_parameter": "100-100-AAA"
}
```

Thank You :)
