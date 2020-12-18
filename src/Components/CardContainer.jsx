import React, { Component } from 'react';
import Card from './Cards';
import "../main.css"
import Abhijeet from "../Team_photos/AbhijeetKatte.jpg"
import AmalNair from "../Team_photos/AmalNair.jpg"
import PrajaktaHebbar from "../Team_photos/PrajaktaHebbar.jpg"
import ManaliSapate from "../Team_photos/ManaliSapate.jpg"
import SuvratJoshi from "../Team_photos/SuvratJoshi.jpeg"
import Pushkar from "../Team_photos/Pushkar.jpeg"
import RenjilT from "../Team_photos/RenjilT.png"
import RohanNerlekar from "../Team_photos/RohanNerlekar.jpeg"
import ThirunarayanSimha from "../Team_photos/ThirunarayanSimha.jpg"
class CardContainer extends Component {
    state = {
        teams: [
            {
                "name": "Abhijeet Katte",
                "about":
                    "Abhijeet founder and CEO of Parva, is a gifted data Scientist who led the development of one of India's fastest growing hackathon platforms MachineHack.com, and has worked on data science problems across domains.",
                "photo": Abhijeet
            },
            {
                "name": "Amal Nair",
                "about": "Amal is a talented software engineer and a data scientist who was part of the development team of one of the leading ML hackathon platforms in India.",
                "photo": AmalNair
            },
            {
                "name": "Prajakta Hebbar",
                "about":
                    " Prajakta is a noted journalist with 10+ years of experience with news organisations like Huffpost India, CNN-IBN and The Indian Express.",
                "photo": PrajaktaHebbar
            },
            {
                "name": "Manali Sapate",
                "about":
                    " Manali is an IISc-trained scientist with an alternate career in space technology.",
                "photo": ManaliSapate
            },
            {
                "name": "Suvrat Joshi",
                "about":
                    "Suvrat is a National School Of Drama-trained actor who is the creative force behind one of India's best modern theatre plays.",
                "photo": SuvratJoshi
            },
            {
                "name": "Thirunarayan Simha",
                "about": "Thirunarayan Simhan is a BBA marketing graduate with a diploma in digital marketing.",
                "photo": ThirunarayanSimha
            },
            {
                "name": "Rohan Nerlekar",
                "about": "Rohan Nerlekar is an experienced founder with a demonstrated history of working in the consumer electronics industry. Skilled in Brand Management, Project Management, and Digital Marketing.",
                "photo": RohanNerlekar
            }
        ],
        advisors: [
            {
                "name": "Renjil T",
                "about":
                    "Renjil, Parva's co-founder helped launch 92.7 FM in India and headed large sales efforts for the India Today Group and The Indian Express.",
                "photo": RenjilT
            },
            {
                "name": "Pushkar Paranjpe",
                "about": "Pushkar was previously an academic researcher in modern experimental biology. Extentive experience in the industry in applying data science principles to real world problems. Takes keen interest in startups, tech products and communities.",
                "photo": Pushkar
            }
        ]
    }
    render() {
        if (this.props.team == "team") {
            return (
                <div className="cardContainer">
                    {this.state.teams.map((team) => (
                        <Card info={team} />
                    ))}
                </div>
            );
        }
        return (
            <div className="cardContainer">
                {this.state.advisors.map((advisor) => (
                    <Card info={advisor} />
                ))}
            </div>
        )
    }
}

export default CardContainer;