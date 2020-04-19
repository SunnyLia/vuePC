let validate = {
    name: function (rule, value, callback) {
        if (required(value)) {
            return callback(new Error('请输入姓名'))
        }
        if (!chinese(value) || !range(value, 20, 2)) {
            callback(new Error('请输入正确的姓名!'))
        } else {
            callback()
        }
    },
    // 邮箱的正则
    email: function (rule, value, callback) {
        if (required(value)) {
            return callback(new Error('请输入邮箱'))
        }
        if (!email(value)) {
            callback(new Error('请输入正确的邮箱!'))
        } else {
            callback()
        }
    },
    // 身份证的验证规则
    idcard: function (rule, value, callback) {
        if (required(value)) {
            return callback(new Error('请输入身份证'))
        }
        if (!idcard(value)) {
            callback(new Error('请输入正确的身份证号码'))
        } else {
            callback()
        }
    },
    // 电话号码的验证
    phone: (rule, value, callback) => {
        if (required(value)) {
            return callback(new Error('请输入手机号'))
        }
        if (!phone(value)) {
            callback(new Error('请输入正确的手机号码'))
        } else {
            callback()
        }
    }
}
/**
 * @param {string} 判断空
 * @returns {Boolean}
 */
const required = (dull) => {
    return dull.length === 0 || JSON.stringify(dull) === "{}" || (dull + "").trim() === "";
}
/**
 * @param {string} 长度
 * @returns {Boolean}
 */
const length = (value, length) => {
    return value.length == length
}
/**
 * @param {string} 范围
 * @returns {Boolean}
 */
const range = (value, max, min) => {
    return (value.length >= min && value.length < max)
}
/**
 * @param {string} 中文
 * @returns {Boolean}
 */
const chinese = (chinese) => {
    const reg = /^[\u4e00-\u9fa5]{0,}$/
    return reg.test(chinese)
}
/**
 * @param {string} 数字
 * @returns {Boolean}
 */
const number = (number) => {
    const reg = /^[0-9]*$/
    return reg.test(number)
}

/**
 * @param {string} 姓名
 * @returns {Boolean}
 */
const name = (name) => {
    const reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
    return reg.test(name)
}
/**
 * @param {string} 英文字母
 * @returns {Boolean}
 */
const english = (english) => {
    const reg = /^[A-Za-z]+$/
    return reg.test(english)
}
/**
 * @param {string} 身份证
 * @returns {Boolean}
 */
const idcard = (idcard) => {
    const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
    return reg.test(idcard)
}

/**
 * @param {string} 手机号
 * @returns {Boolean}
 */
const phone = (phone) => {
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/
    return reg.test(phone)
}
/**
 * @param {string} 邮箱
 * @returns {Boolean}
 */
const email = (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return reg.test(email)
}

export default validate;