// import { type SchemaTypeDefinition } from 'sanity'

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [],
// }
// import {postType} from './postType'

// export const schemaTypes = [postType]
// import {postType} from './postType'

// export const schemaTypes = [postType]

// sanity/schemaTypes/index.ts
import mentor from "./mentor"; 
import { postType } from "./postType";
import seo from "./seo";
import course from "./course";

export const schemaTypes = [
  postType,
  mentor, 
    seo,
    course,
];
