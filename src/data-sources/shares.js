import { DataSource } from "apollo-datasource";
import { randomBytes } from "crypto";

export default class Shares extends DataSource {
    /**
     * @param {import('mongodb').Collection} collection MongoDB collection
     */
    constructor(collection) {
        super();
        this.collection = collection;
    }

    async addNewShare(shareableMenu) {
        let key = Buffer.from(randomBytes(6)).toString('base64');
        await this.collection.insertOne({ _id: key, shareableMenu });
        return { success: true, key }
    }
}