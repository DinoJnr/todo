import {useState} from 'react';
import './App.css';
import logo from './logo.svg';
import './index';
// import Index from './scr/index'




function App() {
  const [list,setlist]=useState()
  const [allList,setallList ]=useState([])
  const [saveIt,setSaveIt ]=useState(true)
  const [saving,setSaving]=useState()
  const mainDate=new Date
  const createList=()=>{
    let newList={list}
    newList.time =mainDate.getHours()+":" + mainDate.getMinutes()+":"+ mainDate.getSeconds()
     setallList ([...allList,newList])
    
    setlist("")
  }
  const deleteList=(index)=>{
    let newAllList= allList.filter((theList,i)=>{
      return index!==i
    })
    setallList(newAllList)
  }
  const editIt=(index)=>{
    setlist(allList[index].list)
    setSaveIt(false)
    setSaving(index)
  }
    const saveList=()=>{
      alert("edit successful");
      let edited = allList[saving];
      edited.list = list
      allList[saving]=edited
      setallList(allList)
      setSaveIt(true)
    }
  return (
    <>
    <div id='body'>    
     <h1 id='come'>TODO-LIst</h1>
      <div>
        <input  onChange={(e)=>setlist(e.target.value)} value={list} id='jor'></input>
        <span>
        { saveIt== true? <button onClick={createList}  id='ad'>Add</button>: <button id='goo' onClick={saveList}>Save</button> }
        </span>
        <table id='ble' className="table mt-5 bg-dark" >
                            <tr>
                                  <td className="text-light">S/N</td>
                                  <td className="text-light">List</td>
                                  <td className="text-light">Action</td>
                                  <td className="text-light">Action 2</td>
                                  <td className="text-light">Time</td>
                            </tr>
                            {
                              allList.map((theList,index)=>(
                                <tr className="text-light" key={index}>
                                  <td>{index+1}</td>
                                  <td>{theList.list}</td>
                                  <td><button className="btn btn-danger text-light" onClick={()=>deleteList(index)}>Delete</button></td>
                                  <td><button className="btn btn-info text-light" onClick={()=>editIt(index)}>Edit</button></td>
                                  <td className="text-light">{theList.time}</td>
                                </tr>
                              ))
                            }
                          </table>
      </div>
      </div>

      
      
    </>
   
  );
}

export default App;





