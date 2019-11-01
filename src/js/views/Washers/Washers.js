import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import styles from './Washers.module.css';

const Machine = (props) => {

    const {washersData} = useContext(UserContext);

    let WasherId = props.match.params.WID;

    return (
        <section className={styles.section}>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        name = {washersData[WasherId].name}
                        <br/>
                        type = {washersData[WasherId].type}
                        <br/>
                        number = {washersData[WasherId].number}
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className={["col-sm-12 col-md-3 col-lg-3 m-1", styles.btnGreen].join(' ')}>
                                
                                    {washersData[WasherId].cicle_1} 
                                    <br/> 
                                    &#128178; {washersData[WasherId].price_1}
                                    <br/>
                                    &#128336; {washersData[WasherId].time_1}
                               
                            </div>
                            <div className={["col-sm-12 col-md-3 col-lg-3 m-1", styles.btnGreen].join(' ')}>
                                
                                    {washersData[WasherId].cicle_2} 
                                    <br/> 
                                    &#128178; {washersData[WasherId].price_2}
                                    <br/>
                                    &#128336; {washersData[WasherId].time_2}
                               
                            </div>
                            <div className={["col-sm-12 col-md-3 col-lg-3 m-1", styles.btnGreen].join(' ')}>
                                
                                    {washersData[WasherId].cicle_3} 
                                    <br/> 
                                    &#128178; {washersData[WasherId].price_3}
                                    <br/>
                                    &#128336; {washersData[WasherId].time_3}
                               
                            </div>
                            <div className={["col-sm-12 col-md-3 col-lg-3 m-1", styles.btnGreen].join(' ')}>
                                
                                    {washersData[WasherId].cicle_4} 
                                    <br/> 
                                    &#128178; {washersData[WasherId].price_4}
                                    <br/>
                                    &#128336; {washersData[WasherId].time_4}
                               
                            </div>
                            <div className={["col-sm-12 col-md-3 col-lg-3 m-1", styles.btnGreen].join(' ')}>
                                
                                    {washersData[WasherId].cicle_5} 
                                    <br/> 
                                    &#128178; {washersData[WasherId].price_5}
                                    <br/>
                                    &#128336; {washersData[WasherId].time_5}
                               
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            

        </section>
    );
};

export default Machine;