import { useQuery } from "react-query"
import {getPlayers} from '../requests/basketball-api';
import { useEffect, useState } from "react";
import { Player } from "../requests/basketball-api";

export default function Players() {

    const {data:data1, isLoading, isError} = useQuery('playercache', getPlayers);

    if(isLoading || isError) return <h1>Loading or Error</h1>

    return (
        <div>
                {data1?.map((player:Player) => 
                    <h1>{player.fname}</h1>
                )}

        </div>
    )
}