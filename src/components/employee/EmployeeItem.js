import Button from '../../components/UI/Button';
import { employeeActions } from '../../store/employee-slice';
import styles from './EmployeeItem.module.scss';


import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const EmployeeItem = (props) => {
  const {
    id,
    username,
    userPicture,
    firstName,
    lastName,
    job,
    email,
    phone,
    vote,
  } = props;
  const dispatch = useDispatch();

  const votehandler = () => {
    dispatch(employeeActions.increaseEmployeeVote(id));
  };

  return (
    <div className={styles.itemContainer}>
      <Link to={`/employee/${username}`}>
        <div role='button' className={styles.itemTopside}>
          <div className={styles.itemImg}>
            <img src={userPicture} alt={id} />
          </div>
        </div>
      </Link>

      <div className={styles.itemBottomside}>
        <h4 className={`${styles.userFullname} ${styles.threeDot}`}>
          {firstName} {lastName}
        </h4>
        <h6 className={`${styles.userInfos} ${styles.threeDot}`}>{job}</h6>

        <p className={`${styles.userInfos} ${styles.threeDot}`}>{email}</p>

        <h6 className={`${styles.userInfos} ${styles.threeDot}`}>{phone}</h6>

        <Button
          type='button'
          className={styles.voteButton}
          onClick={votehandler}
        >
          Vote
        </Button>
      </div>
    </div>
  );
};

export default EmployeeItem;
