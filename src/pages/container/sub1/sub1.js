
export default () => {
  return (<div>
    <div id='id'>我是谁</div>

    <button onClick={() => {
      document.getElementById('id').innerText === '我是谁' ?
        (document.getElementById('id').innerText = '金建业') :
        (document.getElementById('id').innerText = '我是谁')
    }}>更改当前状态</button>

    <button id='btn' onClick={() => {
      if (document.getElementById('btn').innerText === '打开子应用') {
        document.getElementById('subBox').setAttribute('style', 'height:auto')
        document.getElementById('btn').innerText = '关闭子应用'
      } else {
        document.getElementById('subBox').setAttribute('style', 'height:0;overflow:hidden')
        document.getElementById('btn').innerText = '打开子应用'
      }

    }}>打开子应用</button>
    <div id='subBox' style={{height:0, overflow:'hidden'}}>
      <div id='sub1'></div>
    </div>
  </div>

  )
}