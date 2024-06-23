import React from 'react'
import styles from './Domaincard.module.css'
import Card from "../../Assets/Card.jpg"

// styles.domain_name

//change the card style and every card should have different route and image

const Domaincard = (props) => {
  return (
  <div >
  <img src={Card} alt="illustartion" className='w-69' />
      <div>
        <div className='text-center '>
        <div className="text-white ">{props.name}</div>

        </div>
  <div className={styles.domain_add_name}>{props.addon}</div>

  </div>
 
  </div>
  )
}

export default Domaincard
