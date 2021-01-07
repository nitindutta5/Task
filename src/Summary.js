import { Card } from 'reactstrap';

const Summary = ({ props }) => {
    console.log(props.string);
    return (
        <Card>
            <h2 className="text-center">Summary</h2>
            {Object.entries(props).map((item, index) => (
                <div className="mb-2" key={index}>{item}</div>
            ))}

            <div></div>
        </Card>
    )
}


export default Summary