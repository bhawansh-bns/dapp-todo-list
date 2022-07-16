import {useEffect, useState} from "react";
import Web3 from "web3";


const useContractConnetion = (contract_abi:any[], contract_address:string, callback:Function) => {
    const [contract, setContract] = useState<any>();
    useEffect (()=>{
        try {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        const contract = new web3.eth.Contract(contract_abi, contract_address);
        setContract (contract);
        callback (web3);
        } catch {}
    }, [])
        return contract;
}


export default useContractConnetion;