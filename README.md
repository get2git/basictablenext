# Basic Table in NextJS 

This is an example of very basic table component for NextJs. This demonstrates how to:

- create a component
- use a component
- pass data to OnClick functions (on row or column click)
- use simple get axios JSON API
- use https://jsonplaceholder.typicode.com fake online REST API for testing
- inline style jsx

## Features
- Choose which columns to display
- Choose which columns to make sortable
- No pagination
- Specify which OnClick Function to execute for column header or row click

## Idea
It started with the question, how to pass a row object in a table to onClick handler in NextJs? 
Couple of options :
```
<tr onClick={this.handleTheClick}>
```
Above code won't pass row object to handleTheClick.

But if you do something like this:
```
<tr onClick={() => this.handleTheClick(row)}> 
```
Then on every render of row a new function would be created.

Other option is
```
<tr onClick={this.handleTheClick} data-item='{row}'>

```
and then in handleTheClick function, get data-item like:

```
handleTheClick (e) {
    const row = e.target.getAttribute('data-item');
}
```

The better approach is what is used in this BasicTable component. Create a separate component and pass the row object as a property of Table component
Look at BasicTable, TableHeader and TableBody components

## How to use?

### Setup

#### Install and Run

Install it and run:

```
npm install
npm run dev
# or
yarn
yarn dev
```

### Configuration

## Todos

- External SCSS 
- Pagination

## Contributing

Contributions are welcome

## License