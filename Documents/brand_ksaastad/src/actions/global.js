

export const changeSelectedTab = (selected) => dispatch => {
    if (selected==="") {
        dispatch({
            type:'SET-SELECTED-TAB',
            payload:"home",
        })
    }
    else{
        dispatch({
            type:'SET-SELECTED-TAB',
            payload:selected,
        })
    }
}