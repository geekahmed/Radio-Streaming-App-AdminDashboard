import React, { Component } from 'react'
import { Jumbotron, Button, Table, Pagination, PaginationItem, PaginationLink  } from 'reactstrap';

export class PushNotification extends Component {
    render() {
        return (
            <div>
      <Jumbotron>
      <div class="btn-group float-right mb-2 btn-group-md" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary"><span className="fa fa-file-pdf-o fa-lg"></span></button>
        <button type="button" class="btn btn-secondary"><span className="fa fa-file-excel-o  fa-lg"></span></button>        
        <button type="button" class="btn btn-secondary"><span className="fa fa-print fa-lg"></span></button>
    </div>
     
          <Button color="primary">Push Notification</Button>
       
      <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Message</th>
          <th>Channel</th>
          <th>Image</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>FM98</td>
          <td>Status</td>
          <td>Category</td>
          <td><img src = "https://dummyimage.com/64X40/000/fff"/></td>
      </tr>
      <tr>
          <th scope="row">1</th>
          <td>FM98</td>
          <td>Status</td>
          <td>Category</td>
          <td><img src = "https://dummyimage.com/64X40/000/fff"/></td>
      </tr>
      <tr>
          <th scope="row">1</th>
          <td>FM98</td>
          <td>Status</td>
          <td>Category</td>
          <td><img src = "https://dummyimage.com/64X40/000/fff"/></td>
      </tr>
      <tr>
          <th scope="row">1</th>
          <td>FM98</td>
          <td>Status</td>
          <td>Category</td>
          <td><img src = "https://dummyimage.com/64X40/000/fff"/></td>
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

export default PushNotification;
