import React from 'react';
import Link from 'next/link';
import classes from './index.module.scss';

const LinkButton = ({ link = '/restaurant', children }) => {
    return (
        <div className={classes.link}>
            <Link href={link}>
                <button className={classes.button}>{children}</button>
            </Link>
        </div>
    );
};

export default LinkButton;
