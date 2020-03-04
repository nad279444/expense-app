import React from 'react'

class AddData extends React.Component {
    state = {
        Amount:"",
        Description:""
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNewUser(this.state);
    
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="Amount">Amount</label>
                        <input type="number" className="form-control"id="Amount" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                            <label htmlFor="Description">Description</label>
                            <input type="text" className="form-control" id="Description"onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>

            </div>
                            )
                        }
                    }

        export default AddData                
