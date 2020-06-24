import React, { Component } from 'react'
import { Jumbotron,Badge, Button, Table, Pagination, PaginationItem, PaginationLink, Form, FormGroup, Input, Label  } from 'reactstrap';

export class AdminSettings extends Component {
    render() {
        return (
            <>
            <div className = "row">
    <div className = "container col-3 mt-2">
      <Badge color = "secondary">Update Profile</Badge>
      <Form >
            <FormGroup>
                <Label htmlFor="username">Name</Label>
                <Input type="text" id="username" name="username"
                    innerRef={(input) => this.username = input} />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="password">Email</Label>
                <Input type="email" id="email" name="email"
                    innerRef={(input) => this.password = input}  />
            </FormGroup>

            <Button type="submit" value="submit" color="primary">Update Profile</Button>
        </Form>
    </div>
        <div className = "container col-3 mt-2">
        <Badge color = "secondary">Update Password</Badge>
             <Form >
                    
                    <FormGroup>
                        <Label htmlFor="currentpassword">Current Password</Label>
                        <Input type="currentpassword" id="currentpassword" name="currentpassword"
                            innerRef={(input) => this.password = input}  />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="newpassword">New Password</Label>
                        <Input type="newpassword" id="newpassword" name="newpassword"
                            innerRef={(input) => this.password = input}  />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="confirmnewpassword">Confirm New Password</Label>
                        <Input type="confirmnewpassword" id="confirmnewpassword" name="confirmnewpassword"
                            innerRef={(input) => this.password = input}  />
                    </FormGroup>
                    <Button type="submit" value="submit" color="primary">Change Password</Button>
                </Form>

        </div>
        </div>
</>
        )
    }
}

export default AdminSettings;
