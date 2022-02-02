import React from 'react';

const Order = (props) => {
    const totalAmount = props.courseInCart.reduce((Amount, course) => Amount + course.price, 0)
    return (
        <div>
            <div className="my-4 p-5 bg-light rounded">
                <h2>Your Orders : {props.courseInCart.length}</h2>
                <p><small>Total Course Fee: {totalAmount}</small></p>
            </div>
        </div>
    );
};

export default Order;