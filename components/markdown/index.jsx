import React from 'react';
import ReactMarkdown from 'react-markdown';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

import CodeBlock from "./codeblock";

const useStyles = makeStyles(theme => ({
    heading: {
        marginTop: theme.spacing(3),
    },
    root: {
        padding: theme.spacing(1),
        maxWidth: '100%',
    },
    codePaper: {
        margin: theme.spacing(2),
    },
    divider: {
        margin: theme.spacing(3),
    },
    tablePaper: {
        margin: theme.spacing(3),
        overflowX: 'auto',
    },
    blockquote: {
        background: '#f9f9f9',
        borderLeft: '10px solid #ccc',
        margin: '1.5em 10px',
        padding: '0.5em 10px',
    },
    imageContainer: {
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    image: {
        maxWidth: '100%',
        flex: 1,
    },
    link: {
        textDecoration: 'none',
        color: 'rgb(225, 0, 80)',
    },
    inlineCode: {
        backgroundColor: '#ececec',
        paddingLeft: '2px',
        paddingRight: '2px',
        borderRadius: '2px',
        color: '#b22222',
        fontWeight: 500,
    },
}))

const MarkdownRenderer = ({ source }) => {
    const classes = useStyles();
    return (
        <ReactMarkdown source={source} className={classes.root} renderers={{
            blockquote: props =>  (
                <blockquote className={classes.blockquote}>
                    <Typography variant='subtitle2' color='textSecondary'>{props.children}</Typography>
                </blockquote>
            ),
            code: props => <Paper className={classes.codePaper}><CodeBlock {...props}/></Paper>,
            delete: props => <Typography component='del'>{props.children}</Typography>,
            emphasis: props => <Typography component='em'>{props.children}</Typography>,
            image: props => (
                <div className={classes.imageContainer}>
                    <img className={classes.image} src={props.src} alt={props.alt}/>
                    <Typography variant="caption" color="textSecondary">{props.alt}</Typography>
                </div>
            ),
            inlineCode: props => <code className={classes.inlineCode}>{props.children}</code>,
            heading: props => <Typography className={classes.heading} variant={`h${props.level}`} component={`h${props.level}`}>{props.children}</Typography>,
            link: ({children, ...props}) => <a {...props} className={classes.link}>{children}</a>,
            listItem: props => <li><Typography>{props.children}</Typography></li>,
            paragraph: props => <Typography>{props.children}</Typography>,
            table: props => (
                <Paper className={classes.tablePaper}>
                    <Table>{props.children}</Table>
                </Paper>
            ),
            tableBody: props => <TableBody>{props.children}</TableBody>,
            tableCell: props => <TableCell>{props.children}</TableCell>,
            tableHead: props => <TableHead>{props.children}</TableHead>,
            tableRow: props => <TableRow>{props.children}</TableRow>,
            thematicBreak: props => <Divider className={classes.divider}/>,
        }}/>
    )
}

export default MarkdownRenderer;