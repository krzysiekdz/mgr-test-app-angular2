import {DataModel} from './dataModel';
import {MODEL} from './dataModelObj';

export class ModelService {
	model:DataModel = MODEL;

	getModel() {
		return this.model.model;
	}
}



