import { useRawRequest } from '@simpleweb/open-format-react';
import { gql } from 'graphql-request';
import { useRouter } from 'next/router';
import { useMint, useNFT } from "@simpleweb/open-format-react";
import {
    Navbar,
} from '../components';
import React from 'react';

export default function NFTMint() {
    const { query } = useRouter();
    const { slug } = query;
    const contractAddress = slug;
    const nft = useNFT(contractAddress);
    const { mint } = useMint(nft);
    const { data } = useRawRequest({
        query: gql`
          {
            token(id: "${slug}") {
                   creator {
          id
        }
properties {
          key
          value
        }
    factory_id
  }
}
    `,



    });



    return (
        <div className='main_bg text-white overflow-hidden min-h-screen' id='top'>
            <Navbar />
            {data && data.token && (
                <div className="w-96 mx-auto">

                    <p className="text-center text-3xl m-2 font-bold">{data.token.properties.find(p => p.key === 'name').value}</p>

                    <p className="text-center text-2xl m-2">{data.token.properties.find(p => p.key === 'description').value}</p>

                    <div className="absolute ml-1 mt-1 ml-auto  h-20 w-20">{data.token.properties.find(p => p.key === 'blockchain')?.value === 'polygon' ?
                        <img className="fill p-2" src="/polygon-logo.png" alt="Polygon logo" /> : data.token.properties.find(p => p.key === 'blockchain')?.value}
                    </div>

                    <img className="rounded-xl" src={`${data.token.properties.find(p => p.key === 'image').value.replace('ipfs://', 'https://')}.ipfs.nftstorage.link`} alt='NFT' />

                    <div className="text-center">
                        <button className="px-4 py-2 text-center bg-purple-400 hover:opacity-80 rounded-xl my-2 mx-auto" onClick={() => mint()}>Mint NFT</button>
                    </div>

                </div>
            )}
        </div>
    );
}
