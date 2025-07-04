"use strict"

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {
	constructor(body) {
		this.body = body;
	};

	async login() {
		const body = this.body;
		const { id , pw } = await UserStorage.getUserInfo(body.id);
		// console.log(a);
		// console.log(id, pw);
		if (id) {
			if (id === body.id && pw === body.pw) {
				return { success: true };
			}
			return { success: false, msg: "비밀번호가 틀렸습니다." };
		}
		return { success: false, msg: "존재하지 않는 아이디입니다." };
	};

	async register() {
		try {
			const response = await UserStorage.save(this.body);
			return response;
		} catch (err) {
			return { success: false, msg: err };
		}
	}

}

module.exports = User;