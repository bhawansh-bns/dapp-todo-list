import { useState, useEffect } from 'react';
import Web3 from 'web3';


const load = async (host_link:string) => {
    const web3 = new Web3(Web3.givenProvider || host_link);
    const accounts = await web3.eth.getAccounts();
    return accounts[1]
}


const useAccount = (host_link: string = 'http://localhost:8545') => {
    const [account, setAccount]: any = useState();
    useEffect((): any => {
        try {
        load(host_link)
        .then(account => setAccount(account))
        } catch (error) {}
    }, []);
    
    return [account, setAccount];
}


export default useAccount;