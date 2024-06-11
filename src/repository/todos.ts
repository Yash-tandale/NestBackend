import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in todos Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.TODOS]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.TODOS]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.TODOS]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.TODOS]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.TODOS]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.TODOS]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.TODOS]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.TODOS]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.TODOS]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.TODOS>;
type Model = ModelStructure[typeof MODELS_NAME.TODOS];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class todos extends BaseRepository(MODELS_NAME.TODOS) {}

export default todos;
