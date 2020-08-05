import styles from './index.less';
import { Link, history, qiankunStart } from 'umi';

function BasicLayout(props) {

  // alert('jyjin')
  qiankunStart()

  return (
    <div className={styles.normal}>

      <h1 className={styles.title}>
        <Link to="/">index</Link>
        <Link to="/home">home</Link>
        <Link to="/list">list</Link>
        <Link to="/sub1">sub1</Link>
      </h1>
      {props.children}
     {/* <div id="sub1"></div> */}

    </div>
  );
}

export default BasicLayout;
