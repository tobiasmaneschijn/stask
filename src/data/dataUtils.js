import mockData from "./mockData"





/**
 * Get current users assignments
 * Currently just returns mock data
 * @returns assignments
 */
const getAssignments = () => {

    let assignments = mockData

    return assignments

}

const getSortedAssignments = () => {

    let assignments = getAssignments()

    assignments.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.dueDate) -new Date(b.dueDate) ;
      });
    
      return assignments
}

export {getAssignments, getSortedAssignments}