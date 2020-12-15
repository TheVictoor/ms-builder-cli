'use strict';

const commandWrapper = ({
	connection
}) => {
	const execute = async (cypher, props) => {
		try {
			const database = await connection;
			const session = database.session();
			const result = await session.run(cypher, props);
			session.close();
			return result;
		} catch (error) {
			console.log(`error when execute command on neo4j`);
			throw error;
		}	
	};

	return {
		execute
	}
};

module.exports = commandWrapper;