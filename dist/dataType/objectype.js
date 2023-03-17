var arr = ["do", "dung ngu", "duy ngu"];
var arrNum = [1, 2, 3];
var arr2 = [[1, 2, 3], [4, 5, 6]];
// tuples
var typle = ['thi', 'dung', 20];
var ROLE;
(function (ROLE) {
    ROLE[ROLE["ADMIN"] = 0] = "ADMIN";
    ROLE[ROLE["USER"] = 1] = "USER";
})(ROLE || (ROLE = {}));
var role = ROLE.ADMIN;
var role2 = ROLE.USER;
console.log(role);
console.log(role2);
var STATUS_CODE;
(function (STATUS_CODE) {
    STATUS_CODE[STATUS_CODE["SUCCESS"] = 200] = "SUCCESS";
    STATUS_CODE[STATUS_CODE["CLIENT_ERROR"] = 400] = "CLIENT_ERROR";
})(STATUS_CODE || (STATUS_CODE = {}));
var code = STATUS_CODE.SUCCESS;
