import React, { Component } from "react";
import { AsyncStorage } from 'react-native';

export const CartContext = React.createContext();
export class CartProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      sum: 0,
      count: 0
    };

    this.addToCart = this.addToCart.bind(this);
    this.countIncrease = this.countIncrease.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  // UNSAFE_componentWillMount = async () => {
  //   const data = await AsyncStorage.getItem('cart');
  //   console.log(data);
  // }

  countIncrease(product) {
      this.setState({
          cartItems: this.state.cartItems.map(item => {
              if (item.id === product.id) {
                  item.quantity = item.quantity + 1;
              }
              return item;
          }),
          sum: this.state.sum += parseFloat(product.price.split('.').join('')),
          count: this.state.count + 1
      });
  }
 
  removeFromCart(product){
      if(product.quantity >= 2) {
          this.setState({
              cartItems: this.state.cartItems.map(item => {
                  if (item.name.toLowerCase() === product.name.toLowerCase()) {
                      item.quantity = item.quantity - 1;
                  }
                  return item;
              }),
              sum: this.state.sum -= parseFloat(product.price.split('.').join('')),
              count: this.state.count - 1
          });
      } else {
          const filt = this.state.cartItems.filter( item =>  item.id !== product.id )
          this.setState({
              cartItems: filt,
              count: this.state.count - 1,
              sum: this.state.sum -= parseFloat(product.price.split('.').join(''))
          })
      }
  }

  addToCart(product) {
      let find = this.state.cartItems.find(
          item => item.name.toLowerCase() === product.name.toLowerCase()
      );
      if(find === undefined) {
          const productWithQuantity = { ...product, quantity: 1 };
          this.setState({
              cartItems: [...this.state.cartItems, productWithQuantity],
              count: this.state.count + 1,
              sum: this.state.sum += parseFloat(product.price.split('.').join(''))
          });
      } else {
          this.countIncrease(product);
      }
  }

  componentDidMount() {
    this._handleGetStorage();
  }

  _handleGetStorage = async () => {
    const cart = await AsyncStorage.getItem('cart');
    const sum = await AsyncStorage.getItem('sum');
    const count = await AsyncStorage.getItem('count');
    await this.setState({
      cartItems: JSON.parse(cart) || [],
      sum: JSON.parse(sum) || 0,
      count: JSON.parse(count) || 0
    })
  }

  _handleSaveStorage = async () => {
    const { cartItems, sum, count } = this.state;
    await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
    await AsyncStorage.setItem('sum', JSON.stringify(sum));
    await AsyncStorage.setItem('count', JSON.stringify(count));
  }

  componentDidUpdate() {
    this._handleSaveStorage();
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          cartItems: this.state.cartItems,
          addToCart: this.addToCart,
          countIncrease: this.countIncrease,
          removeFromCart: this.removeFromCart,
          count: this.state.count,
          sum: this.state.sum
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}