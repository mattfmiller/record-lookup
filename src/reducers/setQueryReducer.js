import constants from './../constants'
const { initialState, types } = constants

const setQueryReducer = (state = initialState, action) => {
  let newArtistsByIdEntry
  let newArtistsByIdStateSlice
  let newMasterRecordListStateSlice
  let newQueryTermSlice
  let newSelectedRecordSlice
  let newDetailsSlice
  let newSelectedRecord
  switch (action.type) {
  case types.SET_QUERY:
    newQueryTermSlice = Object.assign({}, state, {
      queryTerm: action.queryTerm
    })
    return newQueryTermSlice

  case types.REQUEST_ARTIST:
    newArtistsByIdEntry = {
      isFetching: true,
      queryTerm: action.queryTerm,
      artistId: action.artistId
    }
    newArtistsByIdStateSlice = Object.assign({}, state, {
      [action.artistId]: newArtistsByIdEntry
    })
    console.log(newArtistsByIdEntry)
    console.log(newArtistsByIdStateSlice)
    return newArtistsByIdStateSlice

  case types.RECEIVE_ARTIST:
    newArtistsByIdEntry = Object.assign({}, state[action.artistId], {
      isFetching: false,
      artist: action.artistName,
      artistId: action.artistId
    })
    newArtistsByIdStateSlice = Object.assign({}, state, {
      [action.artistId]: newArtistsByIdEntry
    })
    return newArtistsByIdStateSlice

  case types.SET_RECORDS:
    newMasterRecordListStateSlice = Object.assign({}, state, {
      masterRecordList: action.releases
    })
    return newMasterRecordListStateSlice

  case types.REQUEST_DETAILS:
    newSelectedRecord = {
      isFetching: true,
      recordId: action.recordId,
    }
    newSelectedRecordSlice = Object.assign({}, state, {
      [action.recordId]: newSelectedRecord
    })
    return newSelectedRecordSlice

  case types.RECEIVE_DETAILS:
    newSelectedRecord = Object.assign({}, state[action.recordId], {
      isFetching: false,
      recordId: action.recordId
    })
    newSelectedRecordSlice = Object.assign({}, state, {
      [action.recordId]: newSelectedRecord
    })
    return newSelectedRecordSlice

  case types.SET_DETAILS:
    newDetailsSlice = Object.assign({}, state, {
      selectedRecordDetails: action.details
    })
    return newDetailsSlice

  default:
    return state
  }
}



export default setQueryReducer
