import {React,useState} from 'react'
import {Button,Modal,InputGroup,FormControl} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux';
import { addNewUser } from '../Redux/Action';
 
  export default function CutumModal() {
      const dispatch = useDispatch()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name,setName]=useState('')
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAdresse]=useState('')
  
    const list=useSelector(state=>state.list)
    const addUser =()=>{
        dispatch(addNewUser({name,username,email,address,id:list.length+1}))
        handleClose()
    }
    return (
      
      <>
        <Button variant="primary" onClick={handleShow}>
          Add User
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Add User</Modal.Title>
          </Modal.Header>
          <InputGroup className="mb-3">
           <FormControl
           placeholder="name"
           aria-label="name"
           aria-describedby="basic-addon1"
           onChange={(e)=>setName(e.target.value)}
           />
          </InputGroup>
          <InputGroup className="mb-3">
           <FormControl
           placeholder="username"
           aria-label="username"
           aria-describedby="basic-addon1"
           onChange={(e)=>setUsername(e.target.value)}
           />
          </InputGroup>
          <InputGroup className="mb-3">
           <FormControl
           placeholder="email"
           aria-label="email"
           aria-describedby="basic-addon1"
           onChange={(e)=>setEmail(e.target.value)}
           />
          </InputGroup>
          <InputGroup className="mb-3">
           <FormControl
           placeholder="address"
           aria-label="address"
           aria-describedby="basic-addon1"
           onChange={(e)=>setAdresse(e.target.value)}
           />
          
          </InputGroup>
         

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>addUser()}>
              Save Changes
              
            </Button>
            
          </Modal.Footer>
        

        </Modal>
      </>
      
    );

  }
  
  