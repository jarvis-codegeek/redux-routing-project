import React from 'react'
import { connect } from 'react-redux';
import './index.css'
import {addUser, updateUser, setUpdateFlag} from '../store/actions';
import {getExistingData, getUpdateFlag} from '../store/selectors'

class AddUser extends React.Component {
    state = {
        fullName: '',
        emailId: '',
        mobileNo: ''
    }

    componentDidMount(){
        if(this.props.update_flag){
            const {existing_data} = this.props
            if(existing_data instanceof Object){
                this.setState({fullName: existing_data.fullName, emailId: existing_data.emailId, mobileNo: existing_data.mobileNo})
            }
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleClear = () => {
        this.setState({ fullName: '', emailId: '', mobileNo: '' })
    }

    handleSubmit = () => {
        const {fullName, emailId, mobileNo} = this.state;
        let saveData = {
            fullName,
            emailId,
            mobileNo
        }
        if(this.props.update_flag){
            saveData.id = this.props.existing_data.id
            this.props.updateUser(saveData)
            this.props.setUpdateFlag(null, false)            
        }else{
            this.props.addUser(saveData)
        }
        
        this.props.history.push('/listOfUsers')
    }

    render() {
 
        return (
            <section>
                <div className="row">
                    <div className="column"><label>Full Name: </label></div><div className="column"><input type="text" id="fullName" value={this.state.fullName} onChange={this.handleChange} /></div>
                </div>
                <div className="row">
                    <div className="column"><label>Email Id: </label></div><div className="column"><input type="text" id="emailId" value={this.state.emailId} onChange={this.handleChange} /></div>
                </div>
                <div className="row">
                    <div className="column"><label>Mobile No: </label></div><div className="column"><input type="text" id="mobileNo" value={this.state.mobileNo} onChange={this.handleChange} /></div>
                </div>
                <div className="row">
                    <div style={{ "marginLeft": "17.5%" }}><button style={{ "marginRight": "2px" }} onClick={this.handleClear}>Clear</button><button onClick={this.handleSubmit}>{ this.props.update_flag ? 'Update' : 'Submit'}</button></div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return{
        existing_data: getExistingData(state),
        update_flag: getUpdateFlag(state)
    }
}

export default connect(mapStateToProps, {addUser, updateUser, setUpdateFlag})(AddUser)