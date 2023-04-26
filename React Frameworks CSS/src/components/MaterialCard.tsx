import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://cdn.motor1.com/images/mgl/BXXw8A/s1/2024-bugatti-mistral.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Buggati
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    El Bugatti Mistral es un automóvil superdeportivo roadster de dos puertas biplaza, con motor central-trasero montado longitudinalmente y de tracción en las cuatro ruedas, producido por el fabricante francés Bugatti Automobiles S.A.S. a partir de 2023.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
