function Tick() {
  return (
    <div>
      <h1>Hello,world</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
  function Tick1() {
    return (
      <div>
        <h1>Hello,world1</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
}
    
    function Tick2() {
      return (
        <div>
          <h1>Hello,world2</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
    }
      function App() {
        const element = (
          <div>
            <Tick></Tick>
            <Tick1></Tick1>
            <Tick2></Tick2>
          </div>
        );
  ReactDOM.render(element,document.getElementById('root'));
  //设置常量element到dom上
  // 而包裹的App函数则是为了定时器每秒刷新
}

setInterval(App,1000);

