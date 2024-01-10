import React from "react";
import styles from "./../Blocks.module.scss"
import { useSelector } from "react-redux";

const OutputBlock = () => {

    const {outputValue, isFetching} = useSelector((state) => state.translate)

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                English
            </div>
            <div className={styles.output}>
                {isFetching ? 'Loading' : outputValue ? outputValue : ''}
            </div>
        </div>
    )

};

export default OutputBlock