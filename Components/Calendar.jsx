import React from 'react';
import './Calendar.css'
import getMonthData from './Calendar'
import Month from './Month.jsx'

class Calendar extends React.Component {

  static defaultProps = {
    years: [2021],
    languages:['EN','RU'],
    monthNamesEN: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesRU: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekDayNamesEN: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    weekDayNamesRU: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
    defaultDateStatus: [ 
       {date:'01-01-2021', id:1, status: 0}, //busy
       {date:'01-02-2021', id:2, status: 1}, //free
       {date:'26-12-2021', id:360, status:0}, //tentative
      ]
  }

  state = {
     lang:0, // 0-EN, 1-RU
     status: 1,  //0-busy, 1-free, 2-tentative
     selectedMothIndex: this.props.monthNamesEN.indexOf('January'),
     numberOfDisplayedMonth: 0,
  }

  handleChangeLang = (EO) => {
    EO=EO||window.event;
    this.setState({lang: EO.target.value})
  }

  handleChangeMonth = (EO) => {
    EO=EO||window.event;
    this.setState({ numberOfDisplayedMonth : EO.target.value})
  }

 render() {
        let monthName = this.state.lang == 0? this.props.monthNamesEN : this.props.monthNamesRU
        let weekDaysNames =  this.state.lang == 0? this.props.weekDayNamesEN : this.props.weekDayNamesRU 
        let dataOfCalendar = [] 
            for (let i = 0; i <= this.state.numberOfDisplayedMonth; i++) {
                     dataOfCalendar.push(getMonthData(this.props.years[0],i))
                }
        let dataOfCalendarCode = dataOfCalendar.map( (v,i)=> {
             let dateStatusForMonth = this.props.defaultDateStatus.filter( date => new Date(2021, 0, date.id).getMonth() === i  )
                 return <Month key={i} monthName={monthName[i]} monthYear={this.props.years[0]} weekDaysNames={weekDaysNames} calendarDataModel={v} dateStatusForMonth={dateStatusForMonth}  />
           })

  return (
      <div>
          <div>
              {this.props.languages.map( (v,i)=> { return <button key={i} value={i} onClick={this.handleChangeLang}>{v}</button>})}
          </div>
          <div>
              months to show: <select onChange={this.handleChangeMonth}>
                                   {this.props.monthNamesEN.map( (v,i)=>{return <option value={i} key={i}>{i+1}</option>} )}
                              </select>
          </div>
          <div className='calendar'>{dataOfCalendarCode}</div>
      </div>
        )
   }
}

export default Calendar;

