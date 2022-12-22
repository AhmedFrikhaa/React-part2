import React from "react";

export default class UsersPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            isLoading: false,
            errorLoading: false
        }
    }


    componentDidMount(){
        // send request to server !!!!
        this.getUsers();
    }



    getUsers(){

        // INIT LOADING !!!!

        this.setState({ isLoading:true })

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())

            .then(result => {

                this.setState({ users: result,  isLoading: false })


            })  // success
            .catch(error => {
                console.log('error', error)

                this.setState({ errorLoading: true ,  isLoading: false })
            });  // failure !!
    }


    render(){
        return(
            <div>


                {
                    this.state.errorLoading === true ?
                        <div className="alert alert-danger">
                            Soemthing went wrong, please try again.
                        </div>
                        :
                        null

                }


                {
                    this.state.isLoading === true ?
                        <div className="text-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>:
                        null

                }



                <div className="row">
                    {
                        this.state.users.map( (u)=>{
                            return(
                                <div key={ u.id } className="col-sm-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <h3>{ u.name }</h3>
                                            <p className="text-muted">{ u.email }</p>
                                        </div>
                                    </div>

                                </div>
                            );
                        } )
                    }
                </div>

            </div>
        );
    }
}