export class ModelService {
	model = {
		data: []
	};

	getData() {
		return this.model.data;
	}

	setData(data) {
		this.model.data = data;
	}

	getModel() {
		return this.model;
	}


}



