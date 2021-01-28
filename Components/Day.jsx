import React from 'react';


class Day extends React.Component {

  
    render() {
   
     let color = this.props.dateStatusForDay!==undefined? this.props.dateStatusForDay.status : null
     color = (color===null && 'tententive' || color ===1&& 'free' || color===0 && 'busy');
  
     
     return(
            <td className={color}>{this.props.date===null? null : this.props.date} </td>
        )
    }
}

export default Day;