import React from "react";
import { Card, Grid, Image, Button } from "semantic-ui-react";
import { Route, Redirect, Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Classrooms = () => {
  return (
    <div style={{ margin: "3%" }}>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                />
                <Card.Header>CLASSROOM-1</Card.Header>
                <Card.Meta>class-id</Card.Meta>
                <Card.Description>Discription about classroom</Card.Description>
              </Card.Content>
              <Card.Content extra textAlign="center">
                <div className="ui two buttons">
                  <Link to="/room1">
                    <Button basic color="green">
                      Enter
                    </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                />
                <Card.Header>CLASSROOM-2</Card.Header>
                <Card.Meta>class-id</Card.Meta>
                <Card.Description>Discription about classroom</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Link to="/room2">
                    <Button basic color="green">
                      Enter
                    </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <Card>
              <Card.Content>
                <Image
                  floated="right"
                  size="mini"
                  src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                />
                <Card.Header>CLASSROOM-3</Card.Header>
                <Card.Meta>class-id</Card.Meta>
                <Card.Description>Discription about classroom</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Link to="/room3">
                    <Button basic color="green">
                      Enter
                    </Button>
                  </Link>
                </div>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Classrooms;
