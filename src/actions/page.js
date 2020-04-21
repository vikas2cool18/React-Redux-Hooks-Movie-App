
export const currentPageOfMovie=(currentPage)=> {
    return {
        type: 'GET_CURRENT_PAGE',
        payload: currentPage
    }
}

export const totalPages=(totalPages)=> {
    return {
        type: 'GET_TOTAL_PAGES',
        payload: totalPages
    }
}