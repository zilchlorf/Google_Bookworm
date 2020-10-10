import React from "react";
import { Container, Row, Col } from "../Grid";
import SaveBtn from "../SaveBtn";
import API from "../../utils/API";
import DeleteBtn from "../DeleteBtn"
import "./style.css"


export function BookList({ children }) {
    return <ul className="list-group">{children}</ul>;
};


export function BookListItem(props) {


    const handleSaveBtn = event => {

        API.saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        }).then(
            res => console.log(res)
        )
            .catch(
                err => console.log(err)
            )
    };

 
    const handleDeleteBtn = event => {
        API.deleteBook(props.id)
            .then(
                res => {
                    props.loadBooks()
                    console.log(props.id)
                }
            )
            .catch(err => console.log(err))
    };

    return (
        <li className="list-group-item" key={props.id}>
            <Container>
                <Row>
 
                    <Col size="xs-8 sm-10">
                        <h3>{props.title}</h3>
                        <p>
                            Written By {[props.authors].flat().join(", ")}
                        </p>
                        <p>
                            {props.description}
                        </p>

                        {!props.id ?
                            <SaveBtn
                                type="success"
                                className="input-lg"
                                onClick={handleSaveBtn}
                            >
                                Save to Reading List
                            </SaveBtn>
                            :
                            <DeleteBtn
                                type="danger"
                                className="input-lg"
                                onClick={handleDeleteBtn}
                            >
                                Delete
                            </DeleteBtn>
                        }
                    </Col>
                </Row>
            </Container>
        </li>
    );
};
