# RPP29 Front End Capstone - Team Cheddar
---

### Team Members
---
- Jaimie Diemer, David Lee, Abdulhameed Nouraldean, Taniel Pogharian

### Project Scope
---
The initial release will focus on providing the minimum viable product of our retail application. Features implemented will be constrained to the client experience which enables customers to search, browse, add to cart, and checkout.

The project is categorized into four (4) services summarized below.

**Overview**
Displays relevant information for a single product in the catalogue.  Our catalogue is organized by products.  One single product can be associated to many sizes and styles which each result in unique SKUs (stock keeping units).

**Related Products**
The Related Items & Comparison module will display two sets of related products.  The first set will be a list of products, determined internally, that are related to the product currently being viewed.  The second set will be a list, custom created by the user, of products which the user has grouped with the current product into an ‘outfit’.

**Questions & Answers**
The Questions & Answers module will allow asking and answering of questions for the product selected. This component will extend the ability to view and search questions, ask questions, answer questions and provide feedback on questions about the current product.
All questions will be asked and answered per product.  Specific styles will not be accounted for within the Questions & Answers module.


**Reviews**
The Ratings module will allow viewing and submission of reviews for the product selected.  The functionality contained within this module can be divided into several pieces:

- Write new review
- Reviews List
- Sorting
- Rating Breakdown
- Product Breakdown

**Current Scope**
- Item Detail pages
- Performance Optimization

**Deffered to Future Release**
- Internal portals
- Catalog search improvements
- Homepage and Search page
- Checkout/Cart page

### Implemented Change Request
---
To provide visibility into customer interactions on our online retail portal. Specifically interactions with the Product Detail page should are collected for further analysis and interpretation.

### Testing
---
We provide seperate testing suites for each service and its interactions.

`npm run test:qna`
`npm run test:overview`
`npm run test:related`
`npm run test:reviews`

### Local Setup
---
- You will need to obtain a security token from github and setup a 'TOKEN' env variable with that value
- Team cheddar recommends https://www.npmjs.com/package/dotenv

Clone the main repository down and run

`npm run build:dev` - Will build webpack
`npm run start`  - Will start express server on localhost:4000

Go to localhost:4000.

### Deploy to Production
