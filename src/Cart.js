import React from 'react';

const Cart = (props) => {

    const cartKeys = Object.keys(props.cart);
    // индексируем goods
    const goodsObj = props.goods.reduce((accum,item) => {
        accum[item.articul] = item;
        return accum;
    }, {});


	return (
		<div className="cart-field">
			<h1>Корзина</h1>
			<table>
				<tbody>
				<tr><th>Art</th><th>Count</th><th>Cost</th></tr>        
				{
					cartKeys.map(item =>
						<tr key={item}>
							<td>{goodsObj[item]['title']}</td>
							<td>{props.cart[item]}</td>
							<td>{goodsObj[item]['cost']*props.cart[item]}</td>
						</tr>  
                    )
                }
				</tbody>
			</table>
		</div>	
	)
}

export default Cart;