"use strict"

class UserStorage {
	static #users = {
		id: ["abc", "def", "ghi"],
		pw: ["1234", "2345", "3456"],
		name: ["김길동", "이길동", "홍길동"],
	};

	static getUsers(...fields) {
		const users = this.#users;
		const newUsers = fields.reduce((newUsers, field) => {
			if (users.hasOwnProperty(field)) {
				newUsers[field] = users[field];
			}
			return newUsers;
		}, {});
		return newUsers;
	};

	static getUserInfo(id) {
		const users = this.#users;
		const idx = users.id.indexOf(id);
		const usersKeys = Object.keys(users); // => [id, pw, name]
		const userInfo = usersKeys.reduce((newUser, info) => {
			newUser[info] = users[info][idx];
			return newUser;
		}, {});
		return userInfo;
	}

	static save(userInfo) {
		const users = this.#users;
		users.id.push(userInfo.id);
		users.name.push(userInfo.name);
		users.pw.push(userInfo.pw);

		return { success: true };
	}
}

module.exports = UserStorage;