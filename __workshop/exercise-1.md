# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint                              | method   | Description                                                                                                                                                      |
| ------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/transaction/allTransactions`        | `GET`    | Seller transaction - all transactions with transaction id, type, date, customer info, merchandise, amount and salesperson who's responsible                      |
| `/transaction/allTransactions/:m`     | `GET`    | Seller transaction - month transaction with transaction id, type, date, customer info, merchandise, amount and salesperson who's responsible                     |
| `transaction/monthlyTransactions/:m`  | `PUT`    | Seller transaction - add a transaction with type, customer info, date, seller info and merchandize info, and a some-how auto-generated transaction id            |
| `/transaction/dailyTransaction/:date` | `GET`    | Seller transaction - current daily transaction with transaction id, type, date, customer info, merchandise, amount and salesperson who's responsible             |
| `transaction/dailyTransaction/:data`  | `PATCH`  | Seller transaction - add a to today's transaction with type, customer info, date, seller info and merchandize info, and a some-how auto-generated transaction id |
| `/management/employee`                | `GET`    | Seller management - get all employees info, wages/salaries, position.etc endpoint.                                                                               |
| `/management/employee/:id`            | `GET`    | Seller management - get specific employee by id                                                                                                                  |
| `/management/employee`                | `POST`   | Seller management - add a new employees with info, wages/salaries, status, position.etc                                                                          |
| `/management/employee/:id`            | `PUT`    | Seller management - replace employees info                                                                                                                       |
| `/management/employee/:id`            | `PATCH`  | Seller management - edit employees info, wages/salaries, status, position.etc                                                                                    |
| `/management/employee/:id`            | `DELETE` | Seller management - delete employees info, wages/salaries, status, position.etc                                                                                  |
| `/transaction/merchandise`            | `GET`    | Seller goods - list of all merchandise of the shop with the price and stock                                                                                      |
| `/transaction/merchandise/:id`        | `GET`    | Seller goods - get specific merhandise info                                                                                                                      |
| `/transaction/merchandise/:id`        | `POST`   | Seller goods - add a new good                                                                                                                                    |
| `/transaction/merchandise/:id`        | `PUT`    | Seller goods - replace info                                                                                                                                      |
| `/transaction/merchandise/:id`        | `PATCH`  | Seller goods - update info of specific merchandise                                                                                                               |
| `/transaction/merchandise/:id`        | `DELETE` | Seller goods - delete certain merchandize                                                                                                                        |
| `/condition/seat`                     | `GET`    | Seller seat - get all current seats, with seat id and occupant                                                                                                   |
| `/condition/seat/:id`                 | `GET`    | Seller seat - get slecific seats, with seat id and occupant                                                                                                      |
| `/condition/seat/:id`                 | `POST`   | Seller seat - add a new seat                                                                                                                                     |
| `/condition/seat/:id`                 | `PUT`    | Seller seat - completely update the seat info                                                                                                                    |
| `/condition/seat/:id`                 | `PATCH`  | Seller seat - update current seat condition, with seat id and occupant.etc                                                                                       |
| `/condition/seat/:id`                 | `DELETE` | Seller seat - delete a seat                                                                                                                                      |
| `/condition/stock`                    | `GET`    | Seller stock - get all the stock of today's merchandise                                                                                                          |
| `/condition/stock/:id`                | `GET`    | Seller stock - get all the stock of today's merchandise                                                                                                          |
| `/condition/stock/:id`                | `POST`   | Seller stock - add a new stock                                                                                                                                   |
| `/condition/stock/:id`                | `PUT`    | Seller stock - replace stock info completely                                                                                                                     |
| `/condition/stock/:id`                | `PATCH`  | Seller stock - update the stock of today's merchandise                                                                                                           |
| `/condition/stock/:id`                | `DELETE` | Seller stock - delete the stock of a merchandise                                                                                                                 |
