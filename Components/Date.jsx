import React from 'react';


class Date extends React.Component {

  
    render() {
    

     return(
            <td> {this.props.date===null? null : this.props.date} </td>
        )
    }
}

export default Date;