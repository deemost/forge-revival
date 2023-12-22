import { Image, Card as BootstrapCard } from "react-bootstrap";
import './Card.css'; // Import a separate CSS file for styling (you can create this file)

function Card({ image, text }) {
    return (
        <BootstrapCard className="custom-card">
            <Image src={image} className="card-image" />
            <BootstrapCard.Body>
                <BootstrapCard.Title>{text}</BootstrapCard.Title>
                <p className="card-description">
                    Some additional information about the card.
                </p>
            </BootstrapCard.Body>
        </BootstrapCard>
    );
}

export default Card;