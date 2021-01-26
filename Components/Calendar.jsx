import React from 'react';
import './Calendar.css'
import getMonthData from './Calendar'
import Month from './Month.jsx'

class Calendar extends React.Component {

  static defaultProps = {
    date: new Date(),
    years: [2021],
    monthNamesEN: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesRU: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekDayNamesEN: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    weekDayNamesRU: ['Пн', 'Вт', 'Ср', 'Чт' , 'Пт', 'Сб', 'Вс'],
  };

   state = {
     lang:0, // 0-EN, 1-RU
     status: 1,  //0-busy, 1-free, 2-tentative
     color: 1,
     selectedMothIndex: this.props.monthNamesEN.indexOf('January'),
     numberOfDisplayedMonth: 3,
  }

 render() {
     let monthName = this.state.lang===0? this.props.monthNamesEN : this.props.monthNamesRU 
     let weekDaysNames = this.state.lang===0? this.props.weekDayNamesEN : this.props.weekDayNamesRU

     let dataNumberOfDisplayedMonth = [] 
          for (let i = 0; i <= this.state.numberOfDisplayedMonth; i++) {
            dataNumberOfDisplayedMonth.push(getMonthData(this.props.years[0],i))
          }

      let dataNumberOfDisplayedMonthCode = dataNumberOfDisplayedMonth.map((v,i)=>{
           return <Month key={i} monthName={monthName[i]} weekDaysNames={weekDaysNames} calendarDataModel={v}  />
          })

    return (
        <div className='app'>
            {dataNumberOfDisplayedMonthCode }
        </div>
        )
      }
}

export default Calendar;

