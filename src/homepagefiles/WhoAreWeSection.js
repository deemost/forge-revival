import { Button } from "react-bootstrap";

function WhoAreWeSection() {
    return (
        <div className="align-items-center justify-content-center">
            <h1 style={{ color: '#EF8F42' }}>Who Are We?</h1>
            <p >
                Forge is a diverse, collaborative, and passionate product development community focused on teaching entrepreneurial
                and engineering skills to empower the next generation of innovators.
            </p>
            <Button
                style={{ backgroundColor: '#A36086', borderColor: '#A36086' }}
                href="learn-more"
            >
                Learn More
            </Button>
        </div>
    );
}

export default WhoAreWeSection;