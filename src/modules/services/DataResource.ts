export class DataResource<T> {
	constructor(private endpoint: string) { }

	async loadAll(): Promise<T[]> {
		const res = await fetch(this.endpoint);

		return res.json();
	}
	async load(id: number) {
		const res = await fetch(`${this.endpoint}/${id}`);

		return res.json();
	}
	async delete(id: number) {
		await fetch(`${this.endpoint}/${id}`, {
			method: 'DELETE'
		});
	}
	async save(data: T) {
		await fetch(this.endpoint, {
			method: 'POST',
			body: JSON.stringify(data)
		});
	}
}