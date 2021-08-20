import {
  INCREMENT,
  ADD_CHILD,
  REMOVE_CHILD,
  CREATE_NODE,
  DELETE_NODE
} from "../actions";

const childIds = (state, action) => {
  switch (action.type) {
    case ADD_CHILD:
      return [...state, action.childId];
    case REMOVE_CHILD:
      return state.filter((id) => id !== action.childId);
    default:
      return state;
  }
};

const node = (state, action) => {
  switch (action.type) {
    case CREATE_NODE:
      return {
        id: action.nodeId,
        counter: 0,
        childIds: []
      };
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case ADD_CHILD:
      return {
        ...state,
        childIds: childIds(state.childIds, ADD_CHILD)
      };
    case REMOVE_CHILD:
      return {
        ...state,
        childIds: childIds(state.childIds, REMOVE_CHILD)
      };
    default:
      return state;
  }
};

const getAllDescendantsIds = (state, nodeId) => {
  state[nodeId].childIds.reduce((acc, childId) => [
    ...acc,
    childId,
    ...getAllDescendantsIds(state, childId),
    []
  ]);
};
const deleteMany = (state, ids) => {
  /*state={...state}
  ids.array.forEach(element => {
    delete(element)
  });*/
  state = { ...state };
  ids.forEach((id) => delete state[id]);
  return state;
};

export const deleteNode = (nodeId) => (state) => {
  const descendantIds = getAllDescendantsIds(state, nodeId);
  return deleteMany(state, [nodeId, ...descendantIds]);
};

export const createNode = (nodeId) => (state) => {
  return {
    ...state,
    [nodeId]: {
      id: nodeId,
      counter: 0,
      childIds: []
    }
  };
};
export const increment = (nodeId) => (state) => {
  return {
    ...state,
    [nodeId]: {
      ...state[nodeId],
      counter: state[nodeId].counter + 1
    }
  };
};
export default (state = {}, action) => {
  const { nodeId } = action;
  if (typeof nodeId === "undefined") {
    return state;
  }
  if (action.type === DELETE_NODE) {
  }

  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  };
};
