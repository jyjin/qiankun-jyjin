// const Cookies = require('universal-cookie');
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default () => {

  // const cookies = new Cookies();


  return (<>
    <div>乾坤HOME</div>
    <button onClick={() => {
      cookies.set('name', 'jyjin', { Secure: true, domain:'localhost' })

    }}>创建</button>
    <button onClick={() => {
      let a = cookies.get('name')
      console.log('cookie == ', a)
    }}>读取</button>
  </>
  )
}