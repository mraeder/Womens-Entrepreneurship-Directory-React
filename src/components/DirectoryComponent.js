import React, { Component } from 'react';     // Import default React import + named import=Component
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {       // Creating Directory class component. JS class inheritence to create child class from parent
    constructor(props) {                 // constructor only required in certain cases. Props is required when there's a constructor
        super(props);                    // needed as 1st line when there is a constructor
        this.state = {                   // state always neeeds to hold an object 
            selectedEntrepreneur: null   
        };
    }

    onEntrepreneurSelect(entrepreneur) {
        this.setState({selectedEntrepreneur: entrepreneur}); 
    }

    renderSelectedEntrepreneur(entrepreneur) {
        if (entrepreneur) {
            return (
                <Card>
                    <CardImg top src={entrepreneur.image} alt={entrepreneur.name} />
                    <CardBody>
                        <CardTitle>{entrepreneur.name}</CardTitle>
                        <CardText>{entrepreneur.overview}</CardText>
                    </CardBody>
                </Card>
            )
        }
    }

    render() {              // return needs to be wrapped in render for a class component
        const directory = this.props.entrepreneurs.map(entrepreneur => {
            return (
                <div key={entrepreneur.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onEntrepreneurSelect(entrepreneur)}>
                        <CardImg width="100%" src={entrepreneur.image} alt={entrepreneur.name} />
                        <CardImgOverlay>
                            <CardTitle>{entrepreneur.name}</CardTitle>
                            <h2>{entrepreneur.businessname}</h2>
                            <h3>{entrepreneur.category}</h3>
                            <h4>{entrepreneur.location}</h4> 
                            <p>{entrepreneur.overview}</p>
                            <p>{entrepreneur.email}</p>
                            <p>{entrepreneur.phone}</p>
                            <p>{entrepreneur.website}</p>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;