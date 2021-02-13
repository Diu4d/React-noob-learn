class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    // 在回调中使用this，必须要绑定
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
      console.log(this.state.isToggleOn);
    }
    render() {
      return (
        <button onClick={this.handleClick}
        // onClick={() => this.handleClick()}
        // 另一种方法
        >
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
)