import React from 'react';
import { Card, CardHeader, CardBody, Typography, CardFooter } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

type ShowCardProps = {
    show: {
        id: number;
        name: string;
        image: {
            medium: string;
        };
    };
};

const ShowCard: React.FC<ShowCardProps> = ({ show }) => {
    const navigate = useNavigate();

    return (
        <Card className="mt-6 basis-1/8 cursor-pointer" onClick={() => navigate(`/show/${show.id}`)} >
            <CardHeader color="blue-gray" className="h-50 min-h-[280]" floated={false}>
                <img src={show.image?.medium} alt={show.name} />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h5" color="blue-gray">{show.name}</Typography>
            </CardBody>
        </Card>
    );
};

export default ShowCard;
