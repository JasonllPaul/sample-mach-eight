import React, {Fragment, useEffect, useRef, useState} from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import {Messages} from "primereact/messages";
import {TabView, TabPanel} from 'primereact/tabview';
import {AutoComplete} from 'primereact/autocomplete';
import {BlockUI} from 'primereact/blockui';
import {getAllPlayersData} from "../js/preloadData";
import {Button} from "primereact/button";
import {findUser} from "../js/operation";
import {InputNumber} from "primereact/inputnumber";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";


function Management() {

    const message = useRef(null);


    /**
     * Validation variables
     */
    const [data, setData] = useState(null);
    const [valueIn, setValueIn] = useState(null);
    const [players, setPlayers] = useState(null);

    useEffect(() => {
        (async () => {
            let getData = await getAllPlayersData();
            setData(getData);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const setFoundUsers = (e) => {
        if (e) {
            e.preventDefault();
        }
        let res = findUser(data, valueIn);
        setPlayers(res);
    }

    const component = <div className="p-grid p-dir-col">
        <div className="p-col">
            <h1>Management Players</h1>
            <Messages ref={message}/>
            <label htmlFor="withoutgrouping">Input in</label>
            <br></br>
            <InputNumber inputId="withoutgrouping" value={valueIn} onValueChange={(e) => setValueIn(e.value)}
                         mode="decimal" useGrouping={false} placeholder={"Plase type an integer"}/>

            <Button icon="pi pi-search" className="p-button-rounded p-button-success p-button-outlined"
                    onClick={(e) => setFoundUsers(e)}/>

            <br></br>
            <br></br>
            <DataTable value={players} emptyMessage={"No matches found"}>
                <Column field="first_name" header="Name"></Column>
                <Column field="last_name" header="Last name"></Column>
                <Column field="h_in" header="Inches"></Column>
                <Column field="h_meters" header="Meters"></Column>
            </DataTable>

        </div>
    </div>

    return <Fragment>
        {component}
        <br></br>
    </Fragment>
}

export default Management;
