import React from "react";
import { Card, Container, CardGroup } from "react-bootstrap";
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
                catergories.map((catergory) => (
                    <CardGroup className="cardGroup" >
                        <Card key={catergory._id} className="productCard">
                            <Card.Header  >
                                {catergory.name}
                            </Card.Header>
                        </Card>
                    </CardGroup>
                ))}
        </Container>
    );
};

export default CatergoryList;
