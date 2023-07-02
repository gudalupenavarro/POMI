import React from 'react';
import style from 'style.css';


const TIMER_TYPE_POMODORO = 'pomodoro';
const TIMER_TYPE_SHORT_BREAK = 'short_break';

class PomodoroTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerType: TIMER_TYPE_POMODORO,
      timerValue: '25:00',
    };
  }

  setPomodoroType = (type) => {
    this.setState({ timerType: type });
  };

  startTimer = () => {
    // Código para iniciar el temporizador
  };

  stopTimer = () => {
    // Código para detener el temporizador
  };

  resetTimer = () => {
    // Código para reiniciar el temporizador
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h1>Pomodoro timer</h1>
            <div className="card-header-buttons">
              <button
                id="buttonTypePomodoro"
                className={this.state.timerType === TIMER_TYPE_POMODORO ? 'active' : ''}
                onClick={() => this.setPomodoroType(TIMER_TYPE_POMODORO)}
              >
                Pomodoro
              </button>
              <button
                id="buttonTypeShortBreak"
                onClick={() => this.setPomodoroType(TIMER_TYPE_SHORT_BREAK)}
              >
                Short Break
              </button>
            </div>
          </div>
          <div className="card-body">
            <div id="circularProgressBar" className="progress-bar">
              <div className="progress-bar-inner">
                <h2 className="progress-value">{this.state.timerValue}</h2>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn-sucess" onClick={this.startTimer}>Start</button>
            <button className="btn-danger" onClick={this.stopTimer}>Stop</button>
            <button onClick={this.resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PomodoroTimer;

