import React from 'react';
import Date from './Date.jsx'


class Month extends React.Component {

  
    render() {
        let calendarDataModelCode = this.props.calendarDataModel.map( (v,i) =>  {
            return(
              <tr key={i}>
                    {
                      v.map( (d,i) => {
                        return <Date key={i} date={d===null? null : d.getDate()}/>
                      })
                    }
              </tr>
            )
         })

      return(
          <div>
             <div>{this.props.monthName}</div>
                <table>
                    <thead>
                        <tr>
                        {this.props.weekDaysNames.map( (v,i)=>{
                            return <th key={i}>{v}</th>
                        })}
                        </tr>
                    </thead>
                <tbody>
                    {calendarDataModelCode}
                </tbody>
              </table>
           </div>
        )
      }
}

export default Month;