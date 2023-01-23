import { ConnectButton, useWallet } from '@simpleweb/open-format-react';

export default function ConnectWallet() {
    const { isConnected, address } = useWallet();

    return (
        <>
            <ConnectButton />
        </>
    );
}

