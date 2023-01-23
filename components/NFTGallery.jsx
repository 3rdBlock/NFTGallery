import { useRawRequest } from '@simpleweb/open-format-react';
import { gql } from 'graphql-request';
import Link from 'next/link'

function NFTGallery() {
    const { data } = useRawRequest({
        query: gql`
      {
  tokens(filter: {factory_id: "process.env.NEXT_PUBLIC_FACTORY_ID!"}) {
    id
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



    function NFTImage({ properties }) {
        const imageProp = properties.filter(prop => prop.key === 'image')[0];
        return (
            <img className="rounded-t-xl" src={`${imageProp.value.replace('ipfs://', 'https://')}.ipfs.nftstorage.link`} alt="NFT" />
        )
    }

    return (
        <>
            <h1 className="text-center text-3xl">Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-x-4 gap-y-16 pb-24 max-w-7xl mx-auto mt-20">
                {data && data.tokens.map(token => (
                 
                        <div className="mx-auto border border-slate-900 rounded-xl backdrop-blur-lg w-80" key={token._id}>
                            <div>
                                <div className="absolute ml-2 mt-2 ml-auto  h-10 w-10">
                                    {token.properties.find(property => property.key === 'blockchain')?.value === 'polygon' ?
                                        <img className="fill p-2" src="/polygon-logo.png" alt="Polygon logo" /> :
                                        token.properties.find(property => property.key === 'blockchain')?.value}
                                </div>
                                <div className="w-full mx-auto ">
                                    <NFTImage properties={token.properties} />
                                </div>
                                <div className="relative z-10 pt-5 space-between pb-4 text-white px-4 ">
                                <div className="flex font-bold">
                                        {token.properties.find(property => property.key === 'name')?.value}
                                </div>
                                <div className="flex ">
                                  
                                    {token.properties.find(property => property.key === 'description')?.value}
                                </div>
                                <Link href='/[slug]' as={`/${token.id}`}>
                                    <div className="bg-purple-400 px-4 py-1 float-right -mt-10 text-slate-900 font-bold rounded-xl hover:opacity-80">
                                        Details
                                    </div>
                                </Link>
                                </div>
                            </div>
                        </div>
                   
                   
                ))}
                    </div>
                    


        </>
    );
}

export default NFTGallery