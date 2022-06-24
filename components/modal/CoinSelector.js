import { useState } from 'react'
import styled from 'styled-components'

import React from 'react'
import { TokenModule } from '@3rdweb/sdk'
import CoinItem from './CoinItem'

const CoinSelector = ({
    setAction, 
    selectedToken,
    thirdWebTokens,
    walletAddress,
    setSelectedToken,
    sanityTokens
})=>{
    return (
        <Wrapper>
            <Title>Select Asset</Title>
            <CoinList>
                {sanityTokens.map((token,index) => (
                <CoinItem key={index}
                token={token}
                sender={walletAddress}
                selectedToken = {selectedToken}
                setSelectedToken={setSelectedToken}
                sanityTokens={sanityTokens}
                thirdWebTokens={thirdWebTokens}
                setAction={setAction}
                />
        ) )}
            </CoinList>
        </Wrapper>
    )
}


export default CoinSelector

const Wrapper = styled.div``
const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`
const CoinList = styled.div`
  display: flex;
  flex-direction: column;
`

