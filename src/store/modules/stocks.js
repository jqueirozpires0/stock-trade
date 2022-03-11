import stocks from '../../data/stocks';

export default {
    state:{
        stocks: []
    },
    mutations:{
        setStocks(state , stocks){
            state.stocks = stocks;
        },

        randonPrice(state){
            state.stocks.forEach(stocks => {
                stocks.price = Math.round(stocks.price * ( 1 + Math.random() - 0.50))
            });
        }
    },
    actions:{
        buyStock({commit} , order){
            commit('buyStock' , order)
        },
        initStock({commit}) {
            commit( 'setStocks', stocks)
        },

        randonPrice({commit}){
            console.log("popopopolo")
            commit('randonPrice')
        }
    },
    getters: {
        stocks(state){
            return state.stocks;
        }
    }

}