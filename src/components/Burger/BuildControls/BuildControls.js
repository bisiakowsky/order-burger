import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildConntrol'

const control = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const BuildControls = (props) =>(
    
    <div className={styles.BuildControl}>
    <p>Price: {props.price.toFixed(2)}</p>
        {control.map((ctrl) => (
             <BuildControl key={ctrl.label}
              type={ctrl.type}
              label={ctrl.label} 
             added={() => props.ingridientsAdded(ctrl.type)} 
             removed={() => props.ingridientsRemoved(ctrl.type)}
             disable={props.disable[ctrl.type]}
             />
        ))}
    </div>
)

export default BuildControls;