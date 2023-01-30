import React,{useState} from 'react';
import './App.css';
import styled from 'styled-components';


let button = styled.button`
margin:
all:unset;
color:white;
background:green;
padding: 4px;
`


function App() {
  let hobbies = [
    {
      name:'sport',
      isChecked: false
    },
    {
      name:'reading',
      isChecked: false
    },
    {
      name:'music',
      isChecked: false
    }
  ]
  const [userData,setData] = useState({hobby:[...hobbies]})
  const [isSubmited,setSubmit] = useState(false)
  const [errorMsgs,setErrorMsgs] = useState({
    username:"",
    pwd:"",
    birthdate: "",
    city:"",
    gender:"",
    hobby:"hobby is required",
    image:""
  })
  const handleSubmit = (e)=>{
    e.preventDefault();
    setSubmit(prev => !prev)
    let nm = e.target
    setData(prev=>({ ...prev,
      username: nm.username.value?
        nm.username.value && setErrorMsgs(prev=>({...prev,username:""})) :
        setErrorMsgs(prev=>({...prev,username:"username is required"})) ,

      pwd:nm.pwd.value?
       nm.pwd.value && setErrorMsgs(prev=>({...prev,pwd:""})) :
        setErrorMsgs(prev=>({...prev,pwd:"password is required"})) ,

      birthdate:nm.birthdate.value?
       nm.birthdate.value && setErrorMsgs(prev=>({...prev,birthdate:""})) : 
       setErrorMsgs(prev=>({...prev,birthdate:"birthdate is required"})) ,

      city:nm.city.value?
       nm.city.value && setErrorMsgs(prev=>({...prev,city:""})) : 
       setErrorMsgs(prev=>({...prev,city:"city is required"})) ,

      gender: nm.gender.value?
       nm.gender.value && setErrorMsgs(prev=>({...prev,gender:""})) :
       setErrorMsgs(prev=>({...prev,gender:"gender is required"})) ,

      // hobby: nm.hobby.value?
      //  nm.hobby.value && setErrorMsgs(prev=>({...prev,hobby:""})) : 
      //  setErrorMsgs(prev=>({...prev,hobby:"hobby is required"})) ,

      img : nm.img.value?
      nm.img.value && setErrorMsgs(prev=>({...prev,image:""})) : 
      setErrorMsgs(prev=>({...prev,image:"image is required"})) ,
    }))
    // console.log(showCounter)
    console.log("showing the e.target obj ...")
    console.log(nm)
  } 
  return(
    
    <div >
        <div className="card">
                <div className="card-header">
              <h2 style={{textAlign:"center"}}>Inscription</h2>
                </div>
          <div className="card-body mx-5">
              <form onSubmit={handleSubmit}  >
                  <div className="form-group">
                  <label>username</label>
                  <input name="username"  className={errorMsgs.username  ?"form-control is-invalid" :" form-control"} /><br/>
                  {errorMsgs.username && <p>{errorMsgs.username}</p>}
                  </div>
                  <div className="form-group">
                    <label>pwd</label>
                    <input name="pwd"   className={errorMsgs.pwd  ?"form-control is-invalid" :" form-control"} /><br/>
                    {errorMsgs.pwd && <p>{errorMsgs.pwd}</p>}
                  </div>
                  <div className="form-group">
                    <label>birthdate</label>
                    <input name="birthdate"  type="date"  className={errorMsgs.birthdate  ?"form-control is-invalid" :" form-control"} /><br/>
                    {errorMsgs.birthdate && <p>{errorMsgs.birthdate}</p>}
                  </div>
                  <div className="form-group">

                  <label>city</label>
                  <select name='city' className={errorMsgs.city  ?"form-control is-invalid" :" form-control"}>
                    <option>Casablance</option>
                  </select>
                  {errorMsgs.city && <p>{errorMsgs.city}</p>}
                  </div>
                  <div className="form-group">

                  <label>Gender</label><br/>
                <input type="radio" name="gender" value="Male" className={errorMsgs.gender  ?" is-invalid" :""} />Male
                <input type="radio" name="gender" value="Male" className={errorMsgs.gender  ?" is-invalid" :""} />Female
                {errorMsgs.gender && <p>{errorMsgs.gender}</p>}
                <br/>

                  </div>

                  <div className="form-group">

                <label>hobby</label>
                {
                 userData.hobby.map(
                  (item,index)=><span key={index}><input type="checkbox" name="hobby" value={item.name}
                  onChange={()=>setData(prev=>({...prev,
                    hobby: prev.hobby.map(elm => elm.name === item.name ? {...item,isChecked:!item.isChecked}:item)
                  }
                    )
                    )
                  }
                  className={errorMsgs.hobby  ? "is-invalid" :""}/>{item.name}</span>
                 )
                }<br/>
                {!userData.hobby[0].isChecked && isSubmited && <p>{errorMsgs.hobby}</p>}
                  </div>

                  <div className="form-group">

                  <label>Photo</label>
                  <input type="file" name='img' className={errorMsgs.img  ?"form-control is-invalid" :" form-control"} />
                  {errorMsgs.image && <p>{errorMsgs.image}</p>}<br/>
                  <br/>
                </div>
                <div className="form-group">
                <button type='submit'>Sign Up</button>
                </div>
              </form>
          </div>
        </div>
                  
            
             

     
      
     {userData.username &&
     <div>
     <p>{`Je suis ${userData.username} né le ${userData.birthdate} a ${userData.city} et mes loisirs sont ${userData.hobby}`}</p>
  </div> }
    </div>)

}

export default App;
