import React, { Component } from 'react';     // Import default React import + named import=Component

class Directory extends Component {       // Creating Directory class component. JS class inheritence to create child class from parent
    constructor(props) {                 // constructor only required in certain cases. Props is required when there's a constructor
        super(props);                    // needed as 1st line when there is a constructor
        this.state = {                // state always neeeds to hold an object 
            entrepreneurs: [
                {
                    id: 0,
                    name: 'Beah Travis',
                    businessname: 'Belladonna the Film, LLC', 
                    location: 'Plymouth, WI',
                    category: 'Film',
                    overview: 'Belladonna Film Project is a community-oriented feature film production filming in Sheboygan County.',
                    email: 'beah@belladonnathefilm.com',
                    phone: '920-946-7117',
                    website: 'www.belladonnathefilm.com',
                    comments: 'The film is currently in the fundraising stages. We hope to be able to begin filming summer 2021. Filming in Sheboygan County will mean hiring local talent and crew and using locations around the county that highlight the unique culture of Sheboygan.',
                    image: 'assets/images/react-lake.jpg'
                },
                {
                    id: 1,
                    name: 'Haley Kammerzelt',
                    businessname: 'Haley Sophia Photography LLC', 
                    location: 'Kiel, WI',
                    category: 'Photography',
                    overview: 'Haley Sophia Photography is a published wedding, family, and boudoir photographer.',
                    email: 'info@haleysophiaphotography.com',
                    phone: '920-946-2046',
                    website: 'www.haleysophiaphotography.com',
                    image: 'assets/images/react-lake.jpg'
                },
                {
                    id: 2, 
                    name: 'Allison Cleereman',
                    businessname: 'Room to Breathe Massage and Wellness', 
                    location: 'Sheboygan, WI',
                    category: 'Health and Wellness',
                    overview: 'I offer different modalities of massage therapy from relaxation, deep tissue, cupping, prenatal, Reiki and come fall will be starting yoga classes.',
                    email: 'roomtobreathewellness@gmail.com',
                    phone: '920-517-2798',
                    website: 'www.massagebook.com/roomtobreathe',
                    image: 'assets/images/react-lake.jpg'
                },
                {
                    id: 3,
                    name: 'Nita Ambedkar',
                    businessname: 'Source-Right INC', 
                    location: 'Verona, WI',
                    category: 'Technology',
                    overview: 'A technology partner specializing in Consulting, IOT and digital transformation.',  
                    email: 'nita@source-right.com',
                    phone: '608-770-4707',
                    website: 'http://source-right.com',
                    image: 'assets/images/react-lake.jpg'
                },
                {
                    id: 4,
                    name: 'Holly VanAkkeren',
                    businessname: 'HVA SOCIALstudies', 
                    location: 'Sheboygan, WI',
                    category: 'Social Media Management',
                    overview: 'I help small businesses increase their brand awareness across social platforms by offering services like content creation, account management, & strategic planning.', 
                    email: 'hvasocialstudies@gmail.com',
                    phone: '920-918-1505',
                    website: 'hollyvanakkeren.com',
                    image: 'assets/images/react-lake.jpg'
                },
                {
                    id: 5,
                    name: 'Jennifer Brevard',
                    businessname: 'Clover Hill Harvest', 
                    location: 'Helenville, WI',
                    category: 'Agriculture and Grocery',
                    overview: 'Providing pasture-raised, organic-fed pork, chicken, turkey and eggs, as well as pure honey, maple syrup and chemical free produce. The way nature intended.',
                    email: 'jen@cloverhillharvest.com',
                    phone: '608-215-7391',
                    website: 'https://www.facebook.com/cloverhillharvest/',
                    image: 'assets/images/react-lake.jpg'
                }
            ],
        };
    }

    render() {              // return needs to be wrapped in render for a class component
        const directory = this.state.entrepreneurs.map(entrepreneur => {
            return (
                <div key={entrepreneur.id} className="col">
                    <img src={entrepreneur.image} alt={entrepreneur.name} />
                    <h2>{entrepreneur.name}</h2>
                    <h2>{entrepreneur.businessname}</h2>
                    <h3>{entrepreneur.category}</h3>
                    <h4>{entrepreneur.location}</h4> 
                    <p>{entrepreneur.overview}</p>
                    <p>{entrepreneur.email}</p>
                    <p>{entrepreneur.phone}</p>
                    <p>{entrepreneur.website}</p>
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