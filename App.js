import React from "react"; 
 export default class App extends React.Component { 
    constructor(props) {
           super(props);    
            this.state = {       users: [{ userId: 101, name: "Himanshu Sengar", email: "Himanshu.com" },   
            {  userId: 102, name: "rahul", email: "Akash@gmail.com" } ], 
                          user: {}, currentIndex: -1, isEdit: false,isHide: true
                        };   
                      }
      handleCreate = () => {   
             this.setState({ currentIndex: -1,isHide: false,isEdit: false,user: {}}
                          );  
                          }; 
      handleEdit = (index) => {  
                        this.setState({       currentIndex: index,       isHide: false,       isEdit: true,       user:
                          { ...this.state.users[index] }    
                                      });   }; 
      handleDelete = (index, name) => { 
                            if (window.confirm(`Are you sure to delete user "${name}"?`)) 
                              {    
                                          let data = this.state.users;
                                        //exclude current index record 
                                          data = data.filter((a, i) => i !== index); 
                                          this.setState({ users: data }); 
                                }   }; 

      handleCancel = () => { 
                             this.setState({       currentIndex: -1,       isHide: true,       isEdit: false,       user: {}     });

                            }; 
      handleChange = (event) => { 
                                  let field = event.target.name;   
                                    let user = { ...this.state.user };  
                                      user[field] = event.target.value;   
                                        this.setState({ user: { ...user } }); 
                                 };
       SaveData = () => {     //check for empty  
                               const userData = this.state.user;    
                                if (Object.keys(userData).length > 0) {     
                                  //for an update     
                                  if (this.state.isEdit) {       
                                    let users = this.state.users;        
                                     users[this.state.currentIndex] = { ...userData };   
                                          //update state     
                                        this.setState({currentIndex:-1,isHide: true, isEdit: false, user: {},     
                                                users: users });      
                                               } 
                                   else {       
                                         //for createupdate state  
                                           this.setState({ users: [...this.state.useruserData], currentIndex: -1,isHide: true,isEdit: false, user: {} });    
                                             }    
                                             }  
                         }; 

      render() {  
           return (     
              <div className="container mt-5"> 
                <h1>Jsx and Data Binding: Class Component
                </h1> <hr />         
                {this.state.isHide === false && (   
                // fragment open
                <> 

                <div className="form-group">
                  <label>User Id :</label> 
                  <input className="form-control"name="userId"value={this.state.user.userId} 
                   onChange={this.handleChange} 
                    placeholder="Enter your id" />   
                 </div> 

                  <div className="form-group"> 
                    <label>Name :</label>
                    <input className="form-control" name="name"value={this.state.user.name}
                    onChange={this.handleChange} placeholder="Enter your name" />
                   </div> 

                    <div className="form-group"> 
                      <label>Email :</label> 
                      <input className="form-control" name="email" onChange={this.handleChange}           
                          placeholder="Enter your email" value={this.state.user.email}  type="text"    />    

                    </div>  

                    <div className="form-group">
                        <button className="btn btn-primary mr-1" onClick={this.SaveData}> SAVE</button>
                        <button className="btn btn-warning" onClick={this.handleCancel}>CANCEL</button>          
                    </div>  
                       </>  // fragment close 

                          )}      
                             {this.state.isHide === true && (<div> <button className="btn btn-primary" 
                             onClick={this.handleCreate}> Create User </button>
                             </div>         )}       
                               <table className="table table-striped mt-2">
                                 <thead>             
                                  <tr>             
                                      <th>UserId</th>         
                                       <th>Name</th> 
                                        <th>Email</th>              
                                         <th>Action</th>           
                                    </tr>          
                                     </thead>          
                                      <tbody>           
                                          {this.state.users.map((item, index) => (
                                            <tr key={index}>               
                                            <td>{item.userId}</td>                 
                                            <td>{item.name}</td>               
                                            <td>{item.email}</td>  

                                            <td> <button className="btn btn-success mr-1" onClick={() =>
                                                 this.handleEdit(index)} > EDIT </button> 

                                                 <button className="btn btn-danger" onClick={() => 
                                                  this.handleDelete(index, item.name)}> DELETE</button> 
                                            </td> 
                                               </tr> 
                                               ))}    
                                       </tbody>  
                                       </table>
                                       </div> 
                                       );  
                                       } 
                                      }  

                      
                      