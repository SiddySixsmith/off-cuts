import React from "react";
import { Card, Container, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom"
import "../../styles/pages.css";
const CatergoryList = ({ catergories }) => {
    if (!catergories.length) {
        return (
            <div className="noProducts">
                <h3>No catergorys at the moment</h3>
            </div>
        );
    }

    return (
        <Container className="productlistContainer">
            {catergories &&
                catergories.map((category) => (
                    <CardGroup className="cardGroup" >
                        <Link to={`/single-product/${category._id}`}>
                            <Card key={category._id} className="productCard">
                                <Card.Header  >
                                    {category.name}
                                </Card.Header>
                            </Card>
                        </Link>
                    </CardGroup>
                ))}
        </Container>
    );
};

export default CatergoryList;
