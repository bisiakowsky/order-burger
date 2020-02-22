import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './Burgeringridients/Burgeringridients'
const burger = (props) => {
    let ingredientArr = Object.keys(props.ingridients)
    .map(igKey =>{
        return [...Array(props.ingridients[igKey])].map((_,i) =>{
           return <BurgerIngredient key={igKey + i} type={igKey}/>;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    },[])
    if(ingredientArr.length === 0){
         ingredientArr = <p>Please add any ingridients</p>;
    }
    return(
        
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top"></BurgerIngredient>
               {ingredientArr}
                <BurgerIngredient type="bread-bottom"></BurgerIngredient>
            </div>
       
    );

}
export default burger;


