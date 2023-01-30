import React,{useState} from 'react'
import './App.css'
function App() {
  const [loggedUser, setName] = useState('');
  const [loggedPwd, setPwd] = useState('');
  const [name,setEnteredName] = useState('')
  const [errorMessages, setErrorMessages] = useState({});

  console.log(errorMessages)
  let data = [{userName:"Ayoub",pwd:"123456"},
  {userName:"Alex",pwd:"12345678"}
]

  const handleSubmit = (e)=>{
    e.preventDefault();
    let userName = e.target.name.value;
    let pwd = e.target.pwd.value;
    let currentUser = data.find(user=> user.userName === userName);
if (currentUser) {
  if (currentUser.pwd !== pwd) {
    setErrorMessages(prev=>({...prev,pwdMsg:"password incorrect"}));
  } else {
    setName(userName);
  }
} else {
  setErrorMessages(prev=>({...prev,userMsg:"userName incorrect"}));
}
};
    
    // console.log(currentUser)
    // data.map((item)=>{
    //   if(currentUser){
    //     setEnteredName(currentUser.userName)
    //     if(item.pwd ===pwd){
    //       setName(userName);
    //     }else{
    //       setErrorMessages(prev=>({...prev,pwdMsg:"password incorrect"}));
    //     }
    //   }if(!currentUser){
    //     setEnteredName(false)
    //     console.log(item.userName,userName)
    //     setErrorMessages(prev=>({...prev,userMsg:"userName incorrect"}));
    //     }
      
    // })
  // }
  if(loggedUser){
    return(
      <div>
        <h1>Home</h1>
        <h3>Hello {loggedUser}</h3>
      </div>
    )
  }else{
  return (
    <div className="login">
      <div className="title">Connexion</div>
      <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
        <label>L'identifiant </label>
        <input type="text" name="name" required />
        {errorMessages.userMsg && <p style={{color:"red"}}>{errorMessages.userMsg}</p>}
        </div>
        <div>
        <label>Mot de passe </label>
        <input type="password" name="pwd" required />
        {errorMessages.pwdMsg && <p style={{color:"red"}}>{errorMessages.pwdMsg}</p>}
        </div>
        <div>
        <input type="submit" value="Se connecter" />
        </div>
      </form>
    </div>
</div>

  )}
}

export default App