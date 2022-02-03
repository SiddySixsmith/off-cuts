import React, { Component } from "react";
import { connect } from 'react-redux'
import { addToCart } from '../cartReducer/cartActions'
import { LinkContainer } from "react-router-bootstrap";
import { Card, Container, CardGroup, Nav } from "react-bootstrap";
import "../../styles/pages.css";

class HomePage extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
    }


    SingleProduct = ({ products }) => {
        if (!products) {
            return (
                <div className="noProducts">
                    <h3>No products at the moment</h3>
                </div>
            );
        }

        return (
            <Container className="productListContainer">
                {
                    (product) => (
                        <CardGroup className="cardGroup" >
                            <Card key={products._id} className="productCard">
                                <Card.Header className="productCardHeader"   >
                                    {product.colour}
                                </Card.Header>
                                <Card.Body> Image </Card.Body>
                                <Card.Text >
                                    Finish: {product.finish}<br />
                                </Card.Text>
                                <Card.Text>
                                    Price: {product.price}<br />
                                </Card.Text>
                                <Card.Text>
                                    Length: {product.length}<br />
                                </Card.Text>
                                <Card.Text>
                                    Width: {product.width}<br />
                                </Card.Text>
                                <Card.Text>
                                    Thickness: {product.thickness}<br />
                                </Card.Text>
                                <Card.Text>
                                    Brand: {product.brand}<br />
                                </Card.Text>
                                <Card.Text>
                                    Stock: {product.quantityInStock}<br />
                                </Card.Text>
                                <LinkContainer to="/">
                                    <Nav.Link
                                        sm="true"
                                        id="findAll"
                                        variant="primary"
                                        size="lg"
                                        className=" searchBtn btn-floating halfway-fab waves-effect waves-light red"
                                        onClick={() => { this.handleClick(product.id) }}><i className="material-icons">add</i>
                                        Find All
                                    </Nav.Link>
                                </LinkContainer>
                            </Card>
                        </CardGroup>
                    )}
            </Container>
        );
    };
}
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
