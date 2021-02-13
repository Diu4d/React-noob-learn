function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user}></Avatar>
    <div className="UserInfo-name">
      {props.user.name}
    </div>
  </div>
  );
}

function Avatar(props) {
  return (
    <img className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
  />
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}></UserInfo>
      {/* props传值author给UserInfo,然后UserInfo接收,接着UserInfo内的小组件再
      获取其传递的author内的各个值 */}
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}