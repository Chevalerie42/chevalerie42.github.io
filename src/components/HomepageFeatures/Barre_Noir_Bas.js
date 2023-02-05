import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function Barre_Noir_Bas () 
{
    return (
        <div 
            className={clsx('padding-bottom--xs')}
            style={{backgroundColor: 'rgb(3, 3, 3)'}}
        >
        </div>
      );
}
