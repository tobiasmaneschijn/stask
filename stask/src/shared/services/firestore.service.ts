import { AssignmentType } from "../types/types";
import firestore from "./firebase";
import firebase from "firebase";

const db = firestore.collection("/assignments");

const getAll = () => {
  return db;
};

const getAllFromUserId = (collection: string, uid: string) => {
  return firestore.collection(collection).where('uid', '==', uid)
};

/**
 * 
 * @param documentId the id of the assignment to retrieve
 * @param uid the user id
 * @returns 
 */
const getAssignmentFromUserID = (documentId: string, uid: string) => {
  return firestore.collection("users/").doc(uid).collection("assignments").doc(documentId);
}

const create = (data: any) => {
  return db.add(data);
};


const createAssignment = (uid: string, data: AssignmentType) => {

  return firestore.collection("users/").doc(uid).collection("assignments").add(data);
};

const updateAssignment = (uid: string, id: string, value: any) => {
  return firestore.collection("users").doc(uid).collection("assignments").doc(id).update(value);
};

const remove = (id: string) => {
  return db.doc(id).delete();
};

const docToAssignment = (doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
 
  ) => {
  
    const data = doc.data()!
    const assignment: AssignmentType = {
      course: data["course"],
      description: data["description"],
      dueDate: data["dueDate"],
      imageUrls: data["imageUrls"],
      links: data["links"],
      title: data["title"],
      uid: data["uid"],
      _id: doc.id
    };
  
  
  
    return assignment;
  
  }
const dataToAssignment = (doc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
) => {

  const data = doc.data()
  const assignment: AssignmentType = {
    course: data["course"],
    description: data["description"],
    dueDate: data["dueDate"],
    imageUrls: data["imageUrls"],
    links: data["links"],
    title: data["title"],
    uid: data["uid"],
    _id: doc.id
  };

  console.log(JSON.stringify(assignment));


  return assignment;

}

const UserDataService = {
  getAll,
  getAllFromUserId,
  getAssignmentFromUserID,
  createAssignment,
  create,
  updateAssignment,
  remove,
  dataToAssignment,
  docToAssignment
};

export default UserDataService;