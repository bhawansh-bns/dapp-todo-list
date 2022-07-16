import { useEffect, useState } from "react";


const useMetaConnection = () => {
    const [connected, setConnected] = useState(false);

    
    useEffect(() => {
        try {
            if (window.ethereum) {
                window.ethereum
                    .request({ method: "eth_requestAccounts" })
                    .then((res: any) => console.log("Metamask Connected: ",res[0]));

        
                setConnected(true);

            }
            else {
                setConnected(false);
                alert("MetaMask is not installed. Please install MetaMask and try again.");
            }
        } catch (error) { }
    }, [])


    return [connected, setConnected];
}


export default useMetaConnection;