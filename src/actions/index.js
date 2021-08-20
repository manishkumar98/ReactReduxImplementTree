export const INCREMENT = "INCREMENT"; //+
export const CREATE_NODE = "CREATE_NODE"; //ADD CHILD
export const DELETE_NODE = "DELETE_NODE"; //X
export const ADD_CHILD = "ADD_CHILD"; //Add child
export const REMOVE_CHILD = "REMOVE_CHILD"; //X

export const increment = (nodeId) => ({
  type: INCREMENT,
  nodeId
});

let nextId = 0;
export const createNode = () => ({
  type: CREATE_NODE,
  nodeId: `new_${nextId++}`
});

export const deleteNode = (nodeId) => ({
  type: DELETE_NODE,
  nodeId
});

export const addChild = (nodeId, childId) => ({
  type: REMOVE_CHILD,
  nodeId,
  childId
});
