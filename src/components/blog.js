import React, { Component } from "react";
import "../css/sidebar.css";
import { Grid, Row, Col } from "react-bootstrap";

import Footer from "../components/Footer";
import { Card, Icon, Menu, Image, Item, Label, Form } from "semantic-ui-react";
import { Button, Comment, Header } from "semantic-ui-react";
import str from "../img/str.jpg";
import nayan from "../img/nayan.jpg";
import vijay from "../img/vijay.jpg";

import sudar from "../img/sudar.jpg";
import jeff from "../img/jeff.jpg";
import elon from "../img/elon.jpg";
import tim from "../img/tim.jpg";
import ajith from "../img/ajith.jpg";

class Blog extends Component {
  render() {
    let legend = "";
    return (
      <div className="contentpanel-wrapper">
        <Grid fluid>
          <Row>
            <Col lg={8}>
              <div class="blogs">
                <Grid fluid>
                  <Row>
                    <Form>
                      <span>
                        <Form.TextArea placeholder="Write something..." />
                      </span>
                    </Form>
                  </Row>
                </Grid>
              </div>
              <div class="blogs">
                <Grid fluid>
                  <Row>
                    <div className="blogs">
                      <Item.Group link className="itempadding">
                        <Item className="blogs">
                          <Item.Image size="tiny" src={sudar} />
                          <Item.Content>
                            <Item.Header>Sudar Pitchai</Item.Header>
                            <Item.Meta>
                              <div>Today at 5:42PM</div>
                            </Item.Meta>
                            <Item.Description>
                              7 Miracle is a wonderful apllication, it made my
                              maintanence tracking breeze !!!
                            </Item.Description>
                            <Item.Extra>
                              <Icon name="heart" />
                              12
                              <Icon name="comment" className="commenticon" />3
                            </Item.Extra>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                      <Comment.Group className="commentpadding">
                        <Header as="h4" dividing />
                        <Comment>
                          <Comment.Avatar src={elon} />
                          <Comment.Content>
                            <Comment.Author as="a">Elon Musk</Comment.Author>
                            <Comment.Metadata>
                              <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>I Agree :-)</Comment.Text>
                            <Comment.Actions>
                              <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                        <Comment>
                          <Comment.Avatar src={jeff} />
                          <Comment.Content>
                            <Comment.Author as="a">Jeff Bezos</Comment.Author>
                            <Comment.Metadata>
                              <div>Yesterday at 12:30AM</div>
                            </Comment.Metadata>
                            <Comment.Text>
                              <p>Yes really great application !</p>
                            </Comment.Text>
                            <Comment.Actions>
                              <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                        <Comment>
                          <Comment.Avatar src={tim} />
                          <Comment.Content>
                            <Comment.Author as="a">Tim Cook</Comment.Author>
                            <Comment.Metadata>
                              <div>5 days ago</div>
                            </Comment.Metadata>
                            <Comment.Text>Amazing !!</Comment.Text>
                            <Comment.Actions>
                              <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                        <Form post>
                          <Form.TextArea />
                          <Button
                            content="Add Reply"
                            labelPosition="left"
                            icon="edit"
                            primary
                          />
                        </Form>
                      </Comment.Group>
                    </div>
                  </Row>
                </Grid>
              </div>

              <div class="blogs">
                <Grid fluid>
                  <Row>
                    <div className="blogs">
                      <Item.Group link className="itempadding">
                        <Item className="blogs">
                          <Item.Image size="tiny" src={ajith} />
                          <Item.Content>
                            <Item.Header>Ajith Kumar</Item.Header>
                            <Item.Meta>
                              <div>Today at 5:42PM</div>
                            </Item.Meta>
                            <Item.Description>
                              PETTA Vs Viswasam: Who Is The Winner Of BOX OFFICE
                              ?
                            </Item.Description>
                            <Item.Extra>
                              <Icon name="heart" />
                              12
                              <Icon name="comment" className="commenticon" />3
                            </Item.Extra>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                      <Comment.Group className="commentpadding">
                        <Header as="h4" dividing />
                        <Comment>
                          <Comment.Avatar src={str} />
                          <Comment.Content>
                            <Comment.Author as="a">Str</Comment.Author>
                            <Comment.Metadata>
                              <div>Today at 5:42PM</div>
                            </Comment.Metadata>
                            <Comment.Text>
                              Vantha Rajav than varuven :-)
                            </Comment.Text>
                            <Comment.Actions>
                              <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                        <Comment>
                          <Comment.Avatar src={nayan} />
                          <Comment.Content>
                            <Comment.Author as="a">Nayanthara</Comment.Author>
                            <Comment.Metadata>
                              <div>Yesterday at 12:30AM</div>
                            </Comment.Metadata>
                            <Comment.Text>
                              <p>Varave venam !!!</p>
                            </Comment.Text>
                            <Comment.Actions>
                              <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                        <Comment>
                          <Comment.Avatar src={vijay} />
                          <Comment.Content>
                            <Comment.Author as="a">Vijay</Comment.Author>
                            <Comment.Metadata>
                              <div>5 days ago</div>
                            </Comment.Metadata>
                            <Comment.Text>
                              உசு பேத்துறவகிட்ட உம்முனும் கடுப் பேத்துறவகிட்ட
                              கம்முனு இருந்தா வாழ்க்கை ஜம்னூ இருக்கும்
                            </Comment.Text>
                            <Comment.Actions>
                              <Comment.Action>Reply</Comment.Action>
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                        <Form post>
                          <Form.TextArea />
                          <Button
                            content="Add Reply"
                            labelPosition="left"
                            icon="edit"
                            primary
                          />
                        </Form>
                      </Comment.Group>
                    </div>
                  </Row>
                </Grid>
              </div>
            </Col>
            <Col lg={4}>
              <div class="blogs">
                <Grid fluid>
                  <Row>
                    <Card>
                      <Image src={sudar} />
                      <Card.Content>
                        <Card.Header>Sudar Pitchai</Card.Header>
                        <Card.Meta>
                          <span className="date">Joined in 2017</span>
                        </Card.Meta>
                        <Card.Description>MD4, green park</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <a>
                          <Icon name="user" />
                          22 Friends
                        </a>
                      </Card.Content>
                    </Card>
                  </Row>
                </Grid>
              </div>

              <div class="blogs">
                <Grid fluid>
                  <Row>
                    <Card>
                      <Image src={elon} />
                      <Card.Content>
                        <Card.Header>Elon Musk</Card.Header>
                        <Card.Meta>
                          <span className="date">Joined in 2014</span>
                        </Card.Meta>
                        <Card.Description>MD5, green park</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <a>
                          <Icon name="mobile" />
                          22 Friends
                        </a>
                      </Card.Content>
                    </Card>
                  </Row>
                </Grid>
              </div>
              <div class="blogs">
                <Grid fluid>
                  <Row>
                    <Card>
                      <Image src={nayan} />
                      <Card.Content>
                        <Card.Header>Nayathara</Card.Header>
                        <Card.Meta>
                          <span className="date">Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>MD3, green park</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <a>
                          <Icon name="user" />
                          22 Friends
                        </a>
                      </Card.Content>
                    </Card>
                  </Row>
                </Grid>
              </div>
              <div class="blogs">
                <Grid fluid>
                  <Row>
                    <Card className="cardpadding">
                      <Image src={vijay} />
                      <Card.Content>
                        <Card.Header>Vijay</Card.Header>
                        <Card.Meta>
                          <span className="date">Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>D2, Green park</Card.Description>
                        <Card.Description>Contact: 9884093338</Card.Description>
                      </Card.Content>
                      <Card.Content extra>
                        <a>
                          <Icon name="user" />
                          22 Friends
                        </a>
                      </Card.Content>
                    </Card>
                  </Row>
                </Grid>
              </div>
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default Blog;
