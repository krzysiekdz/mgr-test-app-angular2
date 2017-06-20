import {DataModel} from './dataModel';
import {MODEL} from './dataModelObj';

export class ModelService {
	model:DataModel = MODEL;

	getModel():DataModel {
		return this.model;
	}
}



