import React, { Component } from 'react';
import axios from 'axios';
import '../App.css'
import ReactPaginate from 'react-paginate'
class List extends Component {
    constructor(props) {
        super(props)
        this.state ={
            posts:[],
            currentPage: 0,
            perPage: 10
        }
    }
    componentDidMount() {
        axios.get('https://coronavirus-19-api.herokuapp.com/countries')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }
    render()
    {   const { posts }= this.state
        return (
            <div>
                <header>
                    <h2>COVID-19 Table</h2>
                </header>
                <div className={"table-responsive"}>
                <table border="1" className={"table table-bordered table -striped text-center"}>
                <thead>
             <th>Country</th>
             <th>Total cases</th>
             <th>New Cases</th>
             <th>Total Deaths</th>
             <th>New Deaths</th>
             <th>Recovered</th>
             <th>Active Cases</th>
           </thead>
           <tbody>
                            { posts.length ?
                             posts.map(post => (
                                 <tr>
                                     <td>{post.country}</td>
                                     <td>{post.cases}</td>
                                     <td>{post.todayCases}</td>
                                     <td>{post.deaths}</td>
                                     <td>{post.todayDeaths}</td>
                                     <td>{post.recovered}</td>
                                     <td>{post.active}</td>
                                 </tr>
                             )) :
                            null
    }           
                    </tbody>
                    
                </table>
                </div>
            </div>

        );
    }
}
export default List;