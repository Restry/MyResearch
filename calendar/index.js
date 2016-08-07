import { Button, Nav, Navbar, NavItem,NavDropdown,MenuItem,Form,FormGroup,ControlLabel,
    FormControl } from 'react-bootstrap';

const navbarInstance = (
    <Form inline>
    <FormGroup controlId="formInlineName">
      <ControlLabel>Name</ControlLabel>
      {' '}
      <FormControl type="text" placeholder="Jane Doe" />
    </FormGroup>
    {' '}
    <FormGroup controlId="formInlineEmail">
      <ControlLabel>Email</ControlLabel>
      {' '}
      <FormControl type="email" placeholder="jane.doe@example.com" />
    </FormGroup>
    {' '}
    <Button type="submit">
      Send invitation
    </Button>
  </Form>
);

ReactDOM.render(navbarInstance, document.getElementById("app"));
 
 const navbarInstance1 = (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap11</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
 
);

ReactDOM.render(navbarInstance1, document.getElementById("app1"));