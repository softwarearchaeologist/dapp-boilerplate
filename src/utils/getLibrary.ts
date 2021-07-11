import { Web3Provider } from '@ethersproject/providers';

const getLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 5000;
    return library;
}

export default getLibrary;