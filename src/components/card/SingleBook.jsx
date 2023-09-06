import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './singleBook.css';

class SingleBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }
    }

    toggleSelectedBook = (event) => {
        const { name, value } = event.target;
        if (!JSON.parse(value)) {
            event.target.className = "btn btn-danger";
            this.setState({ [name]: true });
        } 
        else {
            event.target.className = "btn btn-primary";
            this.setState({ [name]: false });
        } 
    }

    render() {
        const { selected } = this.state;
        const cardSelected = `selected-${selected}`;
        return (
            <Card className={cardSelected}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.category}
                    </Card.Text>
                    <Button onClick={this.toggleSelectedBook} variant="primary" name="selected" value={this.state.selected}>
                        {this.props.btn}
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default SingleBook;
