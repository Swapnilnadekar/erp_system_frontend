import { studentConstants } from "../constants";

const initState = {
  students_list: [],
  loading: false,
  error: "",
};

// const buildStudentsList = (parentId, constCategory, newCategory) => {
//   let updatedCategories = [];

//   if (parentId == undefined) {
//     return [
//       ...constCategory,
//       {
//         _id: newCategory._id,
//         name: newCategory.name,
//         slug: newCategory.slug,
//         childrenCategory: [],
//       },
//     ];
//   } else {
//     for (let cat of constCategory) {
//       if (cat._id == parentId) {
//         const tempCategory = {
//           _id: newCategory._id,
//           name: newCategory.name,
//           slug: newCategory.slug,
//           parentId: newCategory.parentId,
//           childrenCategory: [],
//         };

//         updatedCategories.push({
//           ...cat,
//           childrenCategory:
//             cat.childrenCategory.length > 0
//               ? [...cat.childrenCategory, tempCategory]
//               : [tempCategory],
//         });
//       } else {
//         updatedCategories.push({
//           ...cat,
//           childrenCategory: cat.childrenCategory
//             ? buildCategories(parentId, cat.childrenCategory, newCategory)
//             : [],
//         });
//       }
//     }
//   }

//   return updatedCategories;
// };

export default (state = initState, action) => {
  switch (action.type) {
    case studentConstants.GET_ALL_STUDENTS_REQEUST:
      state = { ...state, loading: true };
      break;

    case studentConstants.GET_ALL_STUDENTS_SUCCESS:
      state = {
        ...state,
        students_list: action.payload.students_list,
        loading: false,
      };
      break;

    case studentConstants.GET_ALL_STUDENTS_FAILURE:
      state = { ...state, loading: false, error: action.payload.error };
      break;

    // case studentConstants.ADD_NEW_STUDENT_REQEUST:
    //   state = { ...state, loading: true };
    //   break;

    // case studentConstants.ADD_NEW_STUDENT_SUCCESS:
    //   const newStudent = action.payload.category;
    //   const updated_students_list = buildCategories(
    //     newStudent.parentId,
    //     state.categories,
    //     newStudent
    //   );

    //   state = {
    //     ...state,
    //     students_list: updated_students_list,
    //     loading: false,
    //   };
    //   break;

    // case studentConstants.ADD_NEW_STUDENT_FAILURE:
    //   state = { ...state, loading: false, error: action.payload.error };
    //   break;

    // case studentConstants.DELETE_STUDENT_REQEUST:
    //   state = { ...state, loading: true };
    //   break;

    // case studentConstants.DELETE_STUDENT_SUCCESS:
    //   state = {
    //     ...state,
    //     loading: false,
    //   };
    //   break;

    // case studentConstants.DELETE_STUDENT_FAILURE:
    //   state = { ...state, loading: false, error: action.payload.error };
    //   break;
  }
  return state;
};
