import UserInfo from './UserInfo';
import PropTypes from 'prop-types';


function formatDate(date) {
  return date.toLocaleDateString();
}


function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />

      <div className="Comment-text">
        {props.text}
      </div>

      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

Comment.propTypes = {
  author: PropTypes.object,
  text: PropTypes.string,
}

export default Comment;
