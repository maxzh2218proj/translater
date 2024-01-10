import React, { useCallback, useEffect, useState } from "react";
import styles from "./../Blocks.module.scss"
import { translateRequest } from "../../redux/slices/translateSlice";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

const InputBlock = () => {

    const [value, setValue] = useState();

    const dispatch = useDispatch();

    /*const fetchTranslate = async () => {
        try{
            dispatch(translateRequest(value));
        }catch (e){
            console.error(e);
        }
    }*/

    const onTextChange = useCallback(
        debounce((str) => {
            //console.log(str);
            dispatch(translateRequest(str));
        }, 350),
        [],
    )

    /*useEffect(() => {
        //console.log('Hey');
        //translateRequest();
        fetchTranslate();
    }, [value])*/

    return(
        <div className={styles.wrapper}>
            <div className={styles.header}>
                Russian
            </div>
            <textarea className={styles.input} value={value} onChange={(e) => {
                onTextChange(e.target.value);
                setValue(e.target.value)
            }}>

            </textarea>
        </div>
    )

};

export default InputBlock