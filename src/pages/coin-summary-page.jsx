import React from 'react'
import AddCoin from '../components/add-coin'
import CoinList from '../components/coin-list'

const CoinSummaryPage = () => {
    return (
        <div className='coinsummary shadow-md border border-black bg-slate-100'>
            <AddCoin />
            <CoinList />
        </div>
    )
}

export default CoinSummaryPage
