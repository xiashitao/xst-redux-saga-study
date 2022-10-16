import React from 'react';
import {connect} from 'react-redux'

class Counter extends React.Component {
    add = () => this.props.dispatch({type:'increment_saga'})
    asyncAdd = () => this.props.dispatch({type:'incrementAsync_saga'})
    render () {
        return (
            <div>
                <span>
                    {this.props.counter}
                </span>
                <button onClick={this.add}>add1-sync</button>
                <button onClick={this.asyncAdd}>add1-async</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({counter:state.counter});
export default connect(mapStateToProps,null)(Counter)