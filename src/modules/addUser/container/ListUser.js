import React from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../store/selectors'
import {deleteUser, setUpdateFlag} from '../store/actions'
import './index.css'

class ListOfUsers extends React.Component {
    state = {
        tableHeader : {
            fullName: 'Full Name',
            emailId: 'Email Id',
            mobileNo: 'Mobile No'
        }
    }
    renderTableHeader() {
       return <><th>Full Name</th><th>Email Id</th><th>Mobile No</th><th>Action</th></>
     }

     handleDelete = (data) => {
         this.props.deleteUser(data)
     }

     handleUpdate = (data) => {
         this.props.history.push('/addUser')
         this.props.setUpdateFlag(data, true)
     }
  
     renderTableData() {
         console.log('renderTable', this.props.listOfUsersData)
        return this.props.listOfUsersData.map((item, index) => {
           const { fullName, emailId, mobileNo } = item //destructuring
           return (
              <tr key={index}>
                 <td>{fullName}</td>
                 <td>{emailId}</td>
                 <td>{mobileNo}</td>
                 <td><button onClick={() => this.handleDelete(item)}>Delete</button><button onClick={() => this.handleUpdate(item)}>Update</button></td>
              </tr>
           )
        })
     }
  
     render() {
        return (
           <div>
              <table id='users'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
}


const mapStateToProps = (state) => {
    return {
        listOfUsersData: getUserList(state)        
    }
}

export default connect(mapStateToProps, {deleteUser, setUpdateFlag})(ListOfUsers);