import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    feed: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        overflowY: 'auto',
        marginBottom: theme.spacing(5),
    },
    empty: {
        textAlign: 'center',
    },
    loadMoreButton: {
        alignSelf: 'center',
        maxWidth: '40em',
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
    }
}));

const Feed = ({children, onLoadNext, emptyText}) => {
    const classes = useStyles();
    return (
        <div className={classes.feed}>
            {
                children && children.length > 0 ? (
                    <React.Fragment>
                        {children}
                        { onLoadNext !== null ? (<Button variant='outlined' onClick={onLoadNext} className={classes.loadMoreButton}>Load More</Button>) : null }
                    </React.Fragment>
                 ) : <Typography className={classes.empty} variant='subtitle1'>{emptyText}</Typography>
            }
        </div>
    )
}

Feed.propTypes = {
    onLoadNext: PropTypes.func,
    emptyText: PropTypes.string,
}

Feed.defaultProps = {
    emptyText: 'No posts to view',
}

export default Feed;