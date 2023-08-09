import classes from './index.module.scss';

const Skeleton = () => {
    return (
        <div className={classes.container}>
            <div className={`${classes.container__header} ${classes.container__skeleton}`}> </div>
            <div className={classes.container__details}>
                <div className={classes.container__skeleton}></div>
                <div className={classes.container__skeleton}></div>
                <div className={classes.container__skeleton}></div>
            </div>
        </div>
    );
};

export default Skeleton;
