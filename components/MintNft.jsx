import { useMint, useNFT } from '@simpleweb/open-format-react';

export default function MintNft() {
    const nft = useNFT('0x0d8ffc9243aeef032c5ad24ed4c3e469bcf3acf1');
    const { mint } = useMint(nft);

    return (
        <div className="max-w-lg mx-auto p-10">
            <h1 className="text-center">Mint NFT


                <br /><br />
                <button className="bg-slate-900 px-6 py-2 rounded-lg mx-auto hover:opacity-80" onClick={() => mint()}>
                Mint NFT
                </button></h1>
          
        </div>
    );
}