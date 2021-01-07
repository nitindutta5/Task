import { Card } from 'reactstrap';

const Summary = ({ props }) => {
    console.log(props.string);
    return (
        <Card>
            <h2 className="text-center">Summary</h2>
            {Object.keys(props).map((key, index) => (
                <div className="mb-2" key={index}>{`${key}:${props[key]}`}</div>
            ))}
        </Card>
    )
}


export default Summary