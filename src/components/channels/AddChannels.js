import React, { Component } from 'react'
import { Jumbotron, Button, Table, Pagination, PaginationItem, PaginationLink  } from 'reactstrap';

export class AddChannels extends Component {
    render() {
        return (
            <div>
      <Jumbotron>
      <div class="btn-group float-right mb-2 btn-group-md" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary"><span className="fa fa-file-pdf-o fa-lg"></span></button>
        <button type="button" class="btn btn-secondary"><span className="fa fa-file-excel-o  fa-lg"></span></button>        
        <button type="button" class="btn btn-secondary"><span className="fa fa-print fa-lg"></span></button>
    </div>
     
          <Button color="primary">Add Channel</Button>
       
      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Image</th>
          <th>Category</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>FM98</td>
          <td><img src = "https://dummyimage.com/64X40/000/fff"/></td>
          <td>Category</td>
          <td>Status</td>
          <td><button type="button" class="btn btn-primary m-1">Edit</button></td>
          <td> <button type="button" class="btn btn-danger m-1">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>FM98</td>
          <td><img src = "https://dummyimage.com/64X40/000/fff"/></td>
          <td>Category</td>
          <td>Status</td>
          <td><button type="button" class="btn btn-primary m-1">Edit</button></td>
          <td> <button type="button" class="btn btn-danger m-1">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>FM98</td>
          <td><img src = "https://dummyimage.com/64X40/000/fff"/></td>
          <td>Category</td>
          <td>Status</td>
          <td><button type="button" class="btn btn-primary m-1">Edit</button></td>
          <td> <button type="button" class="btn btn-danger m-1">Delete</button></td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>FM98</td>
          <td><img src = "https://dummyimage.com/64X40/000/fff"/></td>
          <td>Category</td>
          <td>Status</td>
          <td><button type="button" class="btn btn-primary m-1">Edit</button></td>
          <td> <button type="button" class="btn btn-danger m-1">Delete</button></td>
        </tr>
        
      </tbody>
    </Table>
    <Pagination aria-label="Page navigation example" className = "float-right">
    <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
      </Jumbotron>
    </div>
        )
    }
}

export default AddChannels;
