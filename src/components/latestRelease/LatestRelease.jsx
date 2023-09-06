import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import SingleBook from '../card/SingleBook';
import { nanoid } from 'nanoid';

class LatestRelease extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { searchValue } = this.state;
        let titles = [];
        titles = this.props.fantasyBooks.filter(book => (
            book.title.toLowerCase().includes(searchValue.toLowerCase())
        ))

        return (
            <Container>
                <input className='mb-4'
                    type="text"
                    name="searchValue"
                    placeholder="cerca titolo"
                    value={searchValue}
                    onChange={this.handleInputChange}
                />
                <Row>
                    <Col className="d-flex flex-wrap gap-4">
                        {titles.map(book => (
                            <SingleBook key={nanoid()}
                                img={book.img}
                                title={book.title}
                                category={book.category}
                                btn="Seleziona"
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LatestRelease;