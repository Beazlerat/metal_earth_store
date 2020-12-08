import React, { Component } from 'react';

class PurchaseDetail extends Component {
    render() {
        const { className } = this.props;

        return (
            <div className={'${className} purchase-detail'}>
                purchases Detail goes hehere
            </div>
        )
    }
}

export default PurchaseDetail;