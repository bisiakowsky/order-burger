import React, {Component} from 'react';
import Aux from '../../hoc/ReactAux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGRIDIENTS_PRICES= {
  salad: 0.3,
  bacon: 0.7,
  cheese: 1,
  meat: 2
}

class BurgerBuilder extends Component {

  state = {
    ingridients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
    ,totalPrice: 5.00
  }

  addIngridientsHandler = (type) => {
    const oldCount = this.state.ingridients[type];
    const newCount = oldCount + 1;
    const updatedIngridients = {
      ...this.state.ingridients
    }
    updatedIngridients[type] = newCount;
    const priceUpdated = INGRIDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceUpdated;
    this.setState({totalPrice: newPrice, ingridients: updatedIngridients});
  }

  removeIngridientsHandler = (type) => {
    const oldCount = this.state.ingridients[type];
    if(oldCount <= 0){
      return;
    }
    const newCount = oldCount - 1;
    const updatedIngridients = {
      ...this.state.ingridients
    }
    updatedIngridients[type] = newCount;
    const priceUpdated = INGRIDIENTS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceUpdated;
    this.setState({totalPrice: newPrice, ingridients: updatedIngridients});
  }
  render() {
    const disableInfo = {
      ...this.state.ingridients
    }
    for(let key in disableInfo){
      disableInfo[key] = disableInfo[key] <= 0
      }
    return (
      <Aux>
      <Burger ingridients={this.state.ingridients}></Burger>
        <div>Burger</div>
        <BuildControls 
        ingridientsAdded={this.addIngridientsHandler}
        ingridientsRemoved={this.removeIngridientsHandler}
        disable={disableInfo}
        price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
