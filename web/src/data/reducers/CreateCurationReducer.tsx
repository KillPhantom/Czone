// import {
//   DELETE_CONTENT,
//   RESET_STATE,
//   FETCH_TOPIC_DETAIL_FULFILLED,
//   UPDATE_TOPIC_FULFILLED,
//   UPDATE_TOPIC,
// } from "../actions/CreatePageActions";

// /* Types */
// import type { ActionType } from "../actions/CreatePageActionTypes";
// import { DATA_TYPE } from "../Constants";
// import {
//   CodeTextType,
//   RichTextType,
//   TwitterWidgetType,
//   TopicDetailType,
// } from "../types/CommonTypes";
// import type { StateType } from "../types/CreatePageStateType";

// const DEFAULT_STATE = {
//   title: "",
//   data: [],
//   isUploading: false,
// };

// const CreatePageReducer = (
//   state: StateType = DEFAULT_STATE,
//   action: ActionType
// ) => {
//   switch (action.type) {
//     case DELETE_CONTENT:
//       return {
//         ...state,
//         data: [
//           ...state.data.filter(
//             (
//               item:
//                 | RichTextType
//                 | CodeTextType
//                 | TwitterWidgetType
//                 | null
//                 | undefined
//             ) => item?.id !== action.payload
//           ),
//         ],
//       };
//     case RESET_STATE:
//       return {
//         ...state,
//         title: "",
//         data: [],
//         quoteTopic: [],
//         isUploading: false,
//       };
//     case FETCH_TOPIC_DETAIL_FULFILLED:
//       if (action.payload) {
//         const newState = action.payload;
//         return newState;
//       }
//       return state;

//     default:
//       //   ((checkType: never) => checkType)(action);
//       break;
//   }

//   return state;
// };

// export default CreatePageReducer;
