import React from "react";
import Items from '../components/Items';
import * as actions from "../actions/ItemPageActions";
import {connect} from "react-redux"

class ItemsPageContainer extends React.Component {
    componentDidMount(){
        this.props.pagingProduct({activePage : 1})
    }
    render() { 
        console.log(this.props,'container SSSSSSSSSSSSSSSSSSSSSSSS')
        return (
            <Items 
            {...this.props} data={this.props.items}
            />
        );
    }
}
// lấy dữu liệu từ store reduser
const mapStateToProps = (state) => {
  console.log(state.items.listItem,'itemcontainersssssssssssss')
    return {
        items: state.items.listItem,
        totalPage: state.items.totalPage,
        activePage: state.items.activePage,
        page: state.items.page    
    }
}

const mapDispatchToProps = (dispatch) =>{
    
    return {
        initload : () => { dispatch(actions.getAction())
        },
        createItem:(data)=>{
            dispatch(actions.createActionRequest(data))
        },
        deleteItem:(data)=>{
            dispatch(actions.deleteActionRequest(data))
        },
        updateItem:(data)=>{
            dispatch(actions.updateActionRequest(data))
        },
        searchItem:(data)=>{
            dispatch(actions.searchActionRequest(data))
        },
        pagingProduct: (data) => {
            dispatch(actions.pagingProductRequest(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsPageContainer)