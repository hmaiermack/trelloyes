import React from 'react';
import Card from './card';



function List(props){
    console.log(props)
    return(
        <section className='List'>
                <header className='List-cards'>
                {props.header}
                </header>
                <div className='List-cards'>
                    {props.cards.map(element => 
                        <Card title={element.title} content={element.content} key={element.id} />)}
                </div>
        </section>
    )
}

export default List;