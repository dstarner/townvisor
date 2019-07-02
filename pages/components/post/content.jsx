import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Link from '../link';
import MarkdownRenderer from '../markdown';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(.5),
        padding: theme.spacing(.5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: .98,
        maxWidth: '1200px',
    },
    title: {
        textAlign: 'center',
        marginTop: theme.spacing(2),
    },
    divider: {
        width: '80%',
    },
    header: {
        width: '100%',
        height: '50vh',
        maxHeight: '780px',
        margin: 0,
        borderRadius: '10px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    statistics: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(1),
    },
    smStatistics: {
        flexDirection: 'column',
        paddingBottom: theme.spacing(.1),
    },
    statistic: {
        margin: theme.spacing(2),
    },
    smStatistic: {
        margin: theme.spacing(.1),
    },
}))

const PostContent = ({title, author, statistics, markdown, headerSrc, headerCaption}) => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Paper className={classes.root}>
            {
                headerSrc ? (
                    <CardMedia className={classes.header} image={headerSrc} title={title} />
                ) : null
            }
            {
                headerSrc && headerCaption ? (
                    <Typography variant="caption" color="textSecondary">{headerCaption}</Typography>
                ) : null
            }
            <Typography className={classes.title} variant='h1' component='h1'>{title}</Typography>
            <Typography variant='h6' component='h6'>By <Link href={`/${author}`}>@{author}</Link></Typography>
            <div className={cx(classes.statistics, { [classes.smStatistics]: isSmall })}>
                {statistics.map((statistic, index) => (
                    <div key={index} className={cx(classes.statistic, { [classes.smStatistic]: isSmall })}>
                        {React.isValidElement(statistic) ? statistic : <Typography key={index} variant="subtitle1" color="textSecondary">{statistic}</Typography>}
                    </div>
                ))}
            </div>
            <MarkdownRenderer source={markdown}/>
        </Paper>
    )
}

PostContent.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    statistics: PropTypes.array
}

PostContent.defaultProps = {
    statistics: [],
    headerCaption: '',
}

export default PostContent;