import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Fa0 } from 'react-icons/fa6';
import { FaExpand, FaMoneyBillWave } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {  Slide } from 'react-awesome-reveal';
import { AwesomeButton } from 'react-awesome-button';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function PopularCardDetails({ singleService, idx }) {
    const [expanded, setExpanded] = React.useState(false);
    const { _id, service, image, price,  name, providerImage, description } = singleService;

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className='flex justify-center '>
            <Slide
                damping={0.6}
                direction={idx % 2 === 0 ? "left" : "right"}
            >
                <Card style={{ background: '#fafafa' }} sx={{ maxWidth: 1200 }}>
                    <CardHeader
                        avatar={
                            <Avatar>
                                <img src={providerImage} alt={name} />
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <Fa0 />
                            </IconButton>
                        }
                        title={name}
                    />
                    <h2 className="text-2xl font-bold my-2 ml-4">{service}</h2>
                    <img className='w-1/2 rounded-xl mx-auto' src={image} alt={service} />
                    <CardContent>
                        <div className='flex items-center'>
                            <FaMoneyBillWave className='text-xl mr-4' />
                            <p className='text-lg font-medium'>{price}</p>
                        </div>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <FaExpand />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography>
                                <p className='text-lg font-medium'>{description}</p>
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography className=' flex justify-center'>
                                <Link to={`/services/${_id}`}>
                                    <AwesomeButton className='rounded-lg mx-auto' type="secondary">View Details</AwesomeButton></Link>
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Slide>
        </div>
    );
}

PopularCardDetails.propTypes = {
    singleService: PropTypes.object,
    idx: PropTypes.number,
}