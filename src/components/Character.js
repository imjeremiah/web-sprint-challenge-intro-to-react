// Write your Character component here
import React from 'react';
import { Container, Row, Col, CardDeck, Card, CardImg, CardText, CardBody, CardLink, CardTitle } from 'reactstrap';
import styled from "styled-components";

export default function Character(props) {
    const { character } = props;
    
    return (
        <StyledCharacter>
            <Container>
                <CardDeck>
                    <Row>
                        <Card>
                            <CardImg src={character.image} alt={character.name}/>
                            <CardBody>
                                <CardTitle tag="h5">{character.name}</CardTitle>
                                <CardLink href={character.wiki}>{character.name}'s Wiki Page</CardLink>
                                <CardText>{character.name} is a {character.species} {character.gender} from {character.homeworld}.</CardText>
                            </CardBody>
                        </Card>
                    </Row> 
                </CardDeck>
            </Container>
        </StyledCharacter>
    )

}

const StyledCharacter = styled.div`
    .card {
        width: 30%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;