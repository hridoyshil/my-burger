import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../redux/actionCreators';
import Order from './Order/Order';
import Spinner from '../Spinner/Spinner';





const mapStateToProps = state => {
    return {
        orders: state.orders,
        orderLoading: state.orderLoading,
        orderErr: state.orderErr,
        token: state.token,
        userId: state.userId,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
    }
}



class Orders extends Component {
    // componentDidMount() {
    //     this.props.fetchOrders();
    // }
    componentDidUpdate() {
        console.log(this.props);
    }
    render() {
        // let orders = this.props.orders.map(order => {
        //     return <Order order={order} key={order.id} />
        // })
        return (
            <div>
                <p>orders</p>
            </div>
        )
    }
}


export default Orders;
// export default connect(mapStateToProps, mapDispatchToProps)(Orders);