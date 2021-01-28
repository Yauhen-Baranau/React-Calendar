import React from 'react';
import Day from './Day.jsx'


class Month extends React.Component {

  
    render() {
       



        let calendarDataModelCode = this.props.calendarDataModel.map( (v,i) =>  {
            return(
              <tr key={i}>
                    {
                      v.map( (d,i) => {
                          let dateStatusForDay= this.props.dateStatusForMonth.filter(v=> d!==null && new Date(2021, 0, v.id).getDate()===d.getDate())
                          
                          return <Day dateStatusForDay={dateStatusForDay[0]} key={i} date={d===null? null : d.getDate()} />
                      })
                    }
              </tr>
            )
         })

      return(
          <div className='month'>
             <div className='header'>{this.props.monthName} {this.props.monthYear}</div>
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