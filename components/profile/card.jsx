import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    card: {
        flex: 1,
    },
    backsplash: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '1em',
    },
    divider: {
        margin: theme.spacing(2),
    },
    avatar: {
        width: '200px',
        height: '200px',
    },
}));

const ProfileCard = ({realName, username, avatar, about, backsplash}) => {
    const classes = useStyles();
    const textAvatar = !avatar;

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.backsplash} image={backsplash} title={username}>
                <Avatar src={!textAvatar ? avatar : undefined} className={classes.avatar}>{textAvatar ? username.toUpperCase().charAt(0) : null}</Avatar>
            </CardMedia>
            <CardContent>
                <Typography variant="h5" component="h2">{realName}</Typography>
                <Typography variant="subtitle1" color="textSecondary">@{username}</Typography>
                <Divider className={classes.divider} />
                <Typography>{about}</Typography>
            </CardContent>
        </Card>
    )
}

ProfileCard.propTypes = {
    realName: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    about: PropTypes.string.isRequired,
    backsplash: PropTypes.string,
}

ProfileCard.defaultProps = {
    backsplash: 'https://theawesomedaily.com/wp-content/uploads/2018/07/cool-backgrounds-feat-1-620x350.jpg'
}

export default ProfileCard;