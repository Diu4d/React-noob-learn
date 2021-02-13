class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date : new Date()};
  }
componentDidMount(){
  this.timeID = setInterval(
    () => this.tick(),
    1000
    // 设置定时器每秒刷新一次，重新渲染dom
  );
}
componentWillUnMount(){
  clearInterval(this.timeID);
  //clock被清楚时，停止计时器
}

tick() {
  this.setState({
    date: new Date()
    // 重新设置date的值
    // date每秒的时间都在变化，然后计时器再通过每秒刷新将时间重新渲染在dom中
  });
}

  render () {
    return (
      <div>
        <h1>Hello,world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  } 
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);