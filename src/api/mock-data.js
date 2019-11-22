/**
 * @desc 假数据的模板
 */

module.exports = {
	'listAddress':	{
		"msg": "操作成功",
		"code": "200",
		"state": "ok",
		"data|6-9": [{
			"province":"@province"
		}]
	},
	'userLists':	{
		"msg": "操作成功",
		"code": "200",
		"state": "ok",
		"data|6-20": [{
			"name":"@cname",
			"address":"@county(true)",
			"date":"@date",
			"status|1":["0","1"]
		}]
	}
 }
 