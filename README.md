# HoneyJAR

> A Built Backend E-commerce Housing Sharing Site: Reviews

### CRUD API Endpoints

---

#### Listing Reviews

`GET` /rooms/:id/reviews/recent

`GET` /rooms/:id/reviews/relevant

`GET` /rooms/:id/reviews/filter

###### CRUD ROUTES FOR PRIMARY RECORD

Create
`POST` /rooms/:id/reviews
Read
`GET` /rooms/:id/reviews
Update
`PUT` /reviews/:review_id
Destroy
`DELETE` /reviews/:review_id

#### Parameters

| Name | Type   | Description             |
| ---- | ------ | ----------------------- |
| :id  | Number | Id of the rentable unit |

```

```
